sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

touch ~/.zshrc
touch ~/.bash_profile 
touch /etc/hosts
touch /private/etc/hosts

echo "alias dev='cd ~/Development'" >> ~/.zshrc
echo "alias dcu='docker-compose up'" >> ~/.zshrc
echo "alias dcd='docker-compose down'" >> ~/.zshrc
echo "alias dct='docker run -it promptli_nextjs /bin/bash'" >> ~/.zshrc


echo "alias dev='cd ~/Development'" >> ~/.bash_profile
echo "alias dcu='docker-compose up'"  >> ~/.bash_profile
echo "alias dcd='docker-compose down'"  >> ~/.bash_profile
echo "alias dct='docker run -it promptli_nextjs /bin/bash'" >> ~/.bash_profile


echo "127.0.0.1 localhost" >> /etc/hosts
echo "::1 localhost" >> /etc/hosts
echo "255.255.255.255 broadcasthost" >> /etc/hosts
echo "127.0.0.1 dev.promptli.app" >> /etc/hosts


echo "127.0.0.1 localhost" >> /private/etc/hosts
echo "::1 localhost" >> /private/etc/hosts
echo "255.255.255.255 broadcasthost" >> /private/etc/hosts
echo "127.0.0.1 dev.promptli.app" >> /private/etc/hosts
