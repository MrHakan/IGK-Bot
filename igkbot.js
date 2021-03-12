const Discord = require('discord.js');
const config = require('./config.json');

const webhook = new Discord.WebhookClient('webhook-id', 'webhook-token');

const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Bot aktif!\n${client.user.tag}`);
    client.user.setPresence({
        game: {
            name: 'Watching you!'
        },
        status: 'online'
    })
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
    for (var i = 1; i < 100; i++) {
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
client.on('message', msg => {
    if (msg.content === 'dur') {
        null
    }
})

client.on('message', message => {

    let args = message.content.substring("?").split(" ");

    switch (args[0]) {
        case '?test':
            message.channel.send(`${message.author.tag}`);
            break;
        case '?help':
            var embed = {
                "title": "HELP",
                "description": "[GitHub Linki](https://github.com/MrHakan/IGK-Bot)```github linkine giderek daha fazla bilgiye ulaşabilirsiniz```**prefix = ?**",
                "color": 16747008,
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/avatars/671035744143409214/f54c5cb692fe2562f785a9dda28bf639.png?size=128"
                },
                "author": {
                    "name": "I.G.K Bot",
                    "url": "https://github.com/MrHakan/IGK-Bot",
                    "icon_url": "https://cdn.discordapp.com/avatars/671035744143409214/f54c5cb692fe2562f785a9dda28bf639.png?size=128"
                },
                "fields": [{
                        "name": "help",
                        "value": "kullanılabilcek komutları listeler."
                    },
                    {
                        "name": "join",
                        "value": "Olduğun sesli sohbete girer."
                    },
                    {
                        "name": "ben",
                        "value": "Discord profilin hakkında bilgi verir."
                    },
                    {
                        "name": "sunucu",
                        "value": "Sunucu hakkında bilgi verir"
                    },
                    {
                        "name": "kick <@etiketli kişi>",
                        "value": "Etiketlenmiş kişiyi sunucudan atar"
                    },
                    {
                        "name": "ban <@etiketli kişi>",
                        "value": "Etiketlenmiş kişiyi sunucudan yasaklar"
                    },
                    {
                        "name": "clear <sayı>",
                        "value": "Belirtilen sayı kadar mesaj siler."
                    }
                ]
            };
            message.channel.send({
                embed
            });
            break;
        case '?sunucu':
            var embed = {
                "color": 16747008,
                "thumbnail": {
                    "url": `${message.guild.iconURL({format: "png", dynamic: true })}`
                },
                "author": {
                    "name": `${message.guild.name}`,
                    "url": `${message.guild.iconURL({format: "png", dynamic: true })}`,
                    "icon_url": `${message.guild.iconURL({format: "png", dynamic: true })}`
                },
                "fields": [{
                        "name": "SUNUCUNUN KURULDUĞU TARİH",
                        "value": `${message.guild.createdAt}`
                    },
                    {
                        "name": "ÜYE SAYISI",
                        "value": `${message.guild.memberCount}`
                    }
                ]
            }
            message.channel.send({
                embed
            });
            break;
        case '?join':
            var channel = message.member.voice;
            channel.channel.join()
                .then(message.channel.send(`Sesli sohbete bağlandım`))
                .then(connection => console.log(`Connected !`))
                .catch(console.error);
            break;
        case '?ben':
            var embed = {
                "color": 16747008,
                "thumbnail": {
                    "url": `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`
                },
                "author": {
                    "name": `${message.author.username}`,
                    "url": `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`,
                    "icon_url": `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`
                },
                "fields": [{
                        "name": "HESABIN KURULDUĞU TARİH",
                        "value": `${message.author.createdAt}`
                    },
                    {
                        "name": "DISCORD ID",
                        "value": `${message.author.id}`
                    }
                ]
            };
            message.channel.send({
                embed
            });
            break;
        case '?sürüm':
            message.channel.send(`**Sürüm: 1.2.0**`)
            break;
        case '?spam':
            if (message.member.roles.cache.some(role => role.name === 'Aadmin')) {
                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    for (var i = 1; i < 100; i++)
                        if (member) {
                            message.send(i + ' ' + "aaaaaaaa")
                        }
                }
            }
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
                                    ression: 'hadi bb'
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
                            if (!args[1]) return message.reply('sayı belirtmelisin')
                            message.channel.bulkDelete(args[1]);
                            break;
                        } else {
                            message.reply(':D')
                        }
    }

})
client.login(config.token);