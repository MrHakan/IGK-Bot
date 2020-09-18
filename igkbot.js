const Discord = require('discord.js');

const client = new Discord.Client();
const webhook = new Discord.WebhookClient('756459174623445044', '8ExjwDm4AZxu-fslJgxavcGBARdi7jsNiCHlFCPS4MXheANLKoKNYkPxVlIYRPbJ6Ypk');

const prefix = '?';

client.once('ready', () => {
    console.log(`Bot aktif!\n${client.user.tag}`);
    client.user.setPresence({
        game: {
            name: 'with discord.js'
        },
        status: 'idle'
    })
    console.log(`${client.user.username} is up and running!`);
})
client.on('message', msg => {
    if (msg.content === 'dying light') {
        msg.channel.send('**gece çöküyor**\n**yuva yok**');
    }
})

client.on('message', msg => {
    if (msg.content === 'sa') {
        msg.reply('Aleyküm selam kardeşim.');
    }
})
client.on('message', msg => {
    if (msg.content === 'naber top') {
        msg.reply('iyi senden top')
    }
})
client.on('message', msg => {
    if (msg.content === 'releasethetrunkmonkey') {
        const attachment = new Discord.MessageAttachment('./rttm.mp4');
        msg.channel.send(`${msg.author},`, attachment);
    }
})
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcum-channel');
    if (!channel) return;
    channel.send(`Welcumm, ${member}`);
});
client.on('message', msg => {
    for (var i = 1; i < 100000; i++) {

        if (msg.content === 'osufag') {
            webhook.send(i + ' ' + "aaaaaaaa")
        }
    }
})
client.on('message', msg => {
    if (msg.content === 'osumal') {
        webhook.send('aaaaa')
    }
})


client.on('message', message => {

    let args = message.content.substring(prefix).split(" ");

    switch (args[0]) {
        case '?test':
            message.channel.send(`${message.author.tag}`);
            break;
        case '?help':
            message.channel.send('```? sunucu / sunucu hakkında bilgi verir\n? join / olduğun sesli kanala gelirim\n? ben / discord profilin hakkında bilgi verir\n? orospucocu / orospu cocunu gösterir\n? sürüm / botun sürümünü yazar\n? kick @isim / etiketlediğini sunucudan atar\n? ban @isim / etiketlediğini sunucudan yasaklar\n? clear sayı / belirttiğin sayı kadar mesaj siler```');
            break;
        case '?sunucu':
            message.channel.send(`${message.guild.iconURL({format: "png", dynamic: true })}\n**Sunucu adı:** ${message.guild.name}\n**Üye Sayısı:** ${message.guild.memberCount}`);
            break;
        case '?join':
            var channel = message.member.voice;
            
            channel.channel.join()
                .then(message.channel.send(`Sesli sohbete bağlandım`))
                .then(connection => console.log(`Connected !`))
                .catch(console.error);
            break;
        case '?ben':
            message.channel.send(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}\n**Kullanıcı adın:** ${message.author.username}\n**Hesabının kuruluş tarihi:** ${message.author.createdAt}\n**Discord ID:** ${message.author.id}`);
            break;
        case '*orospucocu':
            message.channel.send(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
            break;
        case '?sürüm':
            message.channel.send(`**Sürüm: 1.2.0**`)
            break;
        case '?kick':
            if (message.member.roles.cache.some(role => role.name === 'Admin')) {
                const user = message.mentions.users.first();

                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.kick('kicklenmeni istediler kickledik').then(() => {
                            message.reply(`${user.tag} denen şahısı kickledim abi.`);
                        }).catch(err => {
                            message.reply('bu adamı kickleyemiyorum');
                            console.log(err);
                        });
                    } else {
                        message.reply("böyle biri yok")
                    }
                } else {
                    message.reply('birisini etiketlemen lazım abi');
                }
                break;
            }
            case '?ban':
                if (message.member.roles.cache.some(role => role.name === 'Admin')) {
                    const user = message.mentions.users.first();

                    if (user) {
                        const member = message.guild.member(user);
                        if (member) {
                            member.ban({
                                ression: 'siktir git'
                            }).then(() => {
                                message.reply(`şu ${user.tag} denen şahsı banladım abi`)
                            })
                        } else {
                            message.reply("böyle biri yok")
                        }
                    } else {
                        message.reply('birisini etiketlemen lazım abi');
                    }
                    break;

                }
                case '?clear':
                    if (message.member.roles.cache.some(role => role.name === 'Admin')) {
                        if (!args[1]) return message.reply('sayı belirtsene')
                        message.channel.bulkDelete(args[1]);
                        break;
                    } else {
                        message.reply('yarama bka sen')
                    }
    }

})
client.login('NjcxMDM1NzQ0MTQzNDA5MjE0.XxHsyQ.hwt2EO9E76aHDZNV0VKEmHDUtq8');