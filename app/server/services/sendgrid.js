const sgMail = require('@sendgrid/mail')
const fromEmail = process.env.SEND_FROM_NAME
const appName = process.env.APP_NAME
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const mailers = {
    passwordReset: 'd-81994a1746e54a8db81cc29a1a157d36',
    passwordResetConfirmation: 'd-48ed55b6ffd24f7c81677b60fc3659d7',
    accountCreated: 'd-1b1fc89d407e495598a799be649b1cc4',
}

module.exports = {
    send(to, templateId, mailerVars = {}) {
        const msg = {
            to: to,
            from: fromEmail,
            templateId: templateId,
            dynamic_template_data: { appName, ...mailerVars },
        }
        sgMail.send(msg)
    },
    accountCreated(user) {
        const { name, email } = user
        this.send(email, mailers.accountCreated, { name, username: email })
    },
    passwordReset(user, passwordResetUrl) {
        const { name, email } = user
        this.send(email, mailers.passwordReset, {
            name,
            username: email,
            passwordResetUrl,
        })
    },
    passwordResetConfirmation(user) {
        const { name, email } = user
        this.send(email, mailers.passwordResetConfirmation, {
            name,
            username: email,
        })
    },
}
