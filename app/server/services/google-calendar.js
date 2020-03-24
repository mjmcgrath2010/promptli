const { google } = require('googleapis')
const { GCAL_CLIENT_ID, GCAL_CLIENT_SECRET, GCAL_REDIRECT_URL } = process.env
const oauth2Client = new google.auth.OAuth2(GCAL_CLIENT_ID, GCAL_CLIENT_SECRET, GCAL_REDIRECT_URL)

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = ['https://www.googleapis.com/auth/calendar']

// set auth as a global default
google.options({
  auth: oauth2Client,
  scopes,
})

const calendar = google.calendar({ version: 'v3' })

const GoogleCalender = {
  auth(account) {
    return oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      state: account,
    })
  },
  async getTokens(code) {
    return new Promise((resolve, reject) => {
      oauth2Client.getToken(code)

      oauth2Client.on('tokens', tokens => {
        oauth2Client.setCredentials(tokens)
        resolve(tokens)
      })

      oauth2Client.on('error', e => {
        // TODO: Handle Error
        reject(e)
      })
    })
  },
  setCrudentials(tokens) {
    oauth2Client.setCredentials(tokens)
  },
  async destroyGoogleAccount() {},
  async getCalendarEvents({
    calendarId = 'primary',
    timeMin = new Date().toISOString(),
    maxResults = 200,
    tokens = {},
    orderBy = 'startTime',
  }) {
    this.setCrudentials(tokens)
    return new Promise((resolve, reject) => {
      calendar.events.list(
        {
          calendarId,
          timeMin,
          maxResults,
          singleEvents: true,
          orderBy,
        },
        (err, res) => {
          return err ? reject(err) : resolve(res.data.items)
        }
      )
    })
  },
  async createCalendar() {},
  async updateCalendar() {},
  async deleteCalendar() {},
  async createEvent(user, calendarId, event) {
    calendar.events.insert(
      {
        auth: this.setCrudentials(user.googleTokens()),
        calendarId: calendarId || 'primary',
        resource: event || evt,
      },
      function(err, event) {
        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err)
          return
        }
        return event
      }
    )
  },
  formatEvent(payload) {
    return ({
      summary: 'Google I/O 2015',
      location: '800 Howard St., San Francisco, CA 94103',
      description: "A chance to hear more about Google's developer products.",
      start: {
        dateTime: '2015-05-28T09:00:00-07:00',
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: '2015-05-28T17:00:00-07:00',
        timeZone: 'America/Los_Angeles',
      },
      attendees: [{ email: 'lpage@example.com' }, { email: 'sbrin@example.com' }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    })
  },
  async updateEvent() {},
  async deleteEvent() {},
}

module.exports = GoogleCalender
