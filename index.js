require("dotenv").config()
const Discord = require("discord.js")
const { createCanvas, loadImage, } = require('canvas');
const Data = require("./Data")
const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.MessageContent,
    ],
})

client.on("ready", () => {
    console.log(`bot is run!${client.user.tag}`);
    client.user.setPresence({
        status: 'dnd',
        activities: [{
            name: `Tesing`,
            type: Discord.ActivityType.Watching
        }]
    })
})

const Prefix = `+`

client.on("messageCreate", async (message) => {
    if(message.content.startsWith(Prefix + "send")){
        if(!message.member.permissions.has("ADMINISTRATOR"))return;
        let row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("star1")
                    .setLabel("⭐")
                    .setStyle(Discord.ButtonStyle.Danger),
                new Discord.ButtonBuilder()
                    .setCustomId("star2")
                    .setLabel("⭐⭐")
                    .setStyle(Discord.ButtonStyle.Danger),
                new Discord.ButtonBuilder()
                    .setCustomId("star3")
                    .setLabel("⭐⭐⭐")
                    .setStyle(Discord.ButtonStyle.Primary),
                new Discord.ButtonBuilder()
                    .setCustomId("star4")
                    .setLabel("⭐⭐⭐⭐")
                    .setStyle(Discord.ButtonStyle.Primary),
                new Discord.ButtonBuilder()
                    .setCustomId("star5")
                    .setLabel("⭐⭐⭐⭐⭐")
                    .setStyle(Discord.ButtonStyle.Primary)
            )
            let embed = new Discord.EmbedBuilder()
            .setAuthor({ name : client.user.username , iconURL : client.user.displayAvatarURL()})
            .setColor("#000000")
            .setDescription(`**قم بتقييم السبورت او السيرفر من 1 - 5 علي حسب النجوم الي ف الاسفل \n 1- سىء جدا \n 2- سىء \n 3- جيد \n 4- جيد جدا \n 5- ممتاز**`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
        message.channel.send({embeds:[embed], components: [row] })
    }
})

client.on("interactionCreate", async (interaction) => {
    if(interaction.customId === "star1"){
        let modal = new Discord.ModalBuilder()
            .setCustomId("thstar1")
            .setTitle(`FeedBack`)
            let fed1 =  new Discord.TextInputBuilder()
            .setCustomId('fedd1')
            .setLabel(`رايك`)
            .setStyle(Discord.TextInputStyle.Paragraph)
            .setMinLength(1)
            .setMaxLength(100)
            .setPlaceholder(`الرجاء وضع رايك هنا`)
            .setRequired(true)
            const First1eee = new Discord.ActionRowBuilder().addComponents(fed1);
            modal.addComponents(First1eee)
            interaction.showModal(modal)
    }
    if(interaction.customId === "star2"){
        let modal = new Discord.ModalBuilder()
            .setCustomId("thstar2")
            .setTitle(`FeedBack`)
            let fed2 =  new Discord.TextInputBuilder()
            .setCustomId('fedd2')
            .setLabel(`رايك`)
            .setStyle(Discord.TextInputStyle.Paragraph)
            .setMinLength(1)
            .setMaxLength(100)
            .setPlaceholder(`الرجاء وضع رايك هنا`)
            .setRequired(true)
            const First1eee = new Discord.ActionRowBuilder().addComponents(fed2);
            modal.addComponents(First1eee)
            interaction.showModal(modal)
        }
        if(interaction.customId === "star3"){
            let modal = new Discord.ModalBuilder()
                .setCustomId("thstar3")
                .setTitle(`FeedBack`)
                let fed3 =  new Discord.TextInputBuilder()
                .setCustomId('fedd3')
                .setLabel(`رايك`)
                .setStyle(Discord.TextInputStyle.Paragraph)
                .setMinLength(1)
                .setMaxLength(100)
                .setPlaceholder(`الرجاء وضع رايك هنا`)
                .setRequired(true)
                const First1eee = new Discord.ActionRowBuilder().addComponents(fed3);
                modal.addComponents(First1eee)
                interaction.showModal(modal)
        }    
        if(interaction.customId === "star4"){
            let modal = new Discord.ModalBuilder()
                .setCustomId("thstar4")
                .setTitle(`FeedBack`)
                let fed4 =  new Discord.TextInputBuilder()
                .setCustomId('fedd4')
                .setLabel(`رايك`)
                .setStyle(Discord.TextInputStyle.Paragraph)
                .setMinLength(1)
                .setMaxLength(100)
                .setPlaceholder(`الرجاء وضع رايك هنا`)
                .setRequired(true)
                const First1eee = new Discord.ActionRowBuilder().addComponents(fed4);
                modal.addComponents(First1eee)
                interaction.showModal(modal)
        }    
        if(interaction.customId === "star5"){
            let modal = new Discord.ModalBuilder()
                .setCustomId("thstar5")
                .setTitle(`FeedBack`)
                let fed5 =  new Discord.TextInputBuilder()
                .setCustomId('fedd5')
                .setLabel(`رايك`)
                .setStyle(Discord.TextInputStyle.Paragraph)
                .setMinLength(1)
                .setMaxLength(100)
                .setPlaceholder(`الرجاء وضع رايك هنا`)
                .setRequired(true)
                const First1eee = new Discord.ActionRowBuilder().addComponents(fed5);
                modal.addComponents(First1eee)
                interaction.showModal(modal)
        }
    
})

client.on('interactionCreate', async (modal) => {
    if (modal.customId === 'thstar1') {
        let msg =  modal.fields.getTextInputValue('fedd1')
        const canvas = createCanvas(1002, 586); 
        const ctx = canvas.getContext("2d");
        const backgroundImage = await loadImage("./Images/star1.png");
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f2f3f5";
        ctx.font = "35px Arial"; 
        ctx.textBaseline = "middle";
        ctx.textAlign = "right";
        
        ctx.fillText("" + modal.user.username, 870, 530); 

        const charactersPerLine = 34;
        const paragraphs = [];
        for (let i = 0; i < msg.length; i += charactersPerLine) {
            paragraphs.push(msg.slice(i, i + charactersPerLine));
        }
        paragraphs.forEach((paragraph, index) => {
            const yPos = 230 + index * 50; 
            ctx.fillText(paragraph, 960, yPos); 
        });

        const userAvatar = await loadImage(modal.user.avatarURL({ extension: 'png' }));
        const avatarCanvas = createCanvas(110, 110); 
        const avatarCtx = avatarCanvas.getContext("2d");
        const radius = 10;
        avatarCtx.beginPath();
        avatarCtx.arc(55, 55, 55, 0, Math.PI * 2);
        avatarCtx.closePath();
        avatarCtx.clip();
        avatarCtx.drawImage(userAvatar, 0, 0, avatarCanvas.width, avatarCanvas.height);
        ctx.drawImage(avatarCanvas, 885, 475, 110, 110); 
        
        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(),"Star1.png");

        let channel = client.channels.cache.get(Data.Channel)
        await modal.reply({content: "Thanks For Your Feedback", ephemeral: true}).then(async() =>{
            await channel.send({files:[attachment]})
        })
    }
    if (modal.customId === 'thstar2') {
        let msg =  modal.fields.getTextInputValue('fedd2')
        const canvas = createCanvas(1002, 586); 
        const ctx = canvas.getContext("2d");
        const backgroundImage = await loadImage("./Images/star2.png");
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f2f3f5";
        ctx.font = "35px Arial"; 
        ctx.textBaseline = "middle";
        ctx.textAlign = "right";
        
        ctx.fillText("" + modal.user.username, 870, 530); 

        const charactersPerLine = 34;
        const paragraphs = [];
        for (let i = 0; i < msg.length; i += charactersPerLine) {
            paragraphs.push(msg.slice(i, i + charactersPerLine));
        }
        paragraphs.forEach((paragraph, index) => {
            const yPos = 230 + index * 50; 
            ctx.fillText(paragraph, 960, yPos); 
        });

        const userAvatar = await loadImage(modal.user.avatarURL({ extension: 'png' }));
        const avatarCanvas = createCanvas(110, 110); 
        const avatarCtx = avatarCanvas.getContext("2d");
        const radius = 10;
        avatarCtx.beginPath();
        avatarCtx.arc(55, 55, 55, 0, Math.PI * 2);
        avatarCtx.closePath();
        avatarCtx.clip();
        avatarCtx.drawImage(userAvatar, 0, 0, avatarCanvas.width, avatarCanvas.height);
        ctx.drawImage(avatarCanvas, 885, 475, 110, 110); 
        
        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(),"Star2.png");

        let channel = client.channels.cache.get(Data.Channel)
        await modal.reply({content: "Thanks For Your Feedback", ephemeral: true}).then(async() =>{
            await channel.send({files:[attachment]})
        })
    }
    if (modal.customId === 'thstar3') {
        let msg =  modal.fields.getTextInputValue('fedd3')
        const canvas = createCanvas(1002, 586); 
        const ctx = canvas.getContext("2d");
        const backgroundImage = await loadImage("./Images/star3.png");
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f2f3f5";
        ctx.font = "35px Arial"; 
        ctx.textBaseline = "middle";
        ctx.textAlign = "right";
        
        ctx.fillText("" + modal.user.username, 870, 530); 

        const charactersPerLine = 34;
        const paragraphs = [];
        for (let i = 0; i < msg.length; i += charactersPerLine) {
            paragraphs.push(msg.slice(i, i + charactersPerLine));
        }
        paragraphs.forEach((paragraph, index) => {
            const yPos = 230 + index * 50; 
            ctx.fillText(paragraph, 960, yPos); 
        });

        const userAvatar = await loadImage(modal.user.avatarURL({ extension: 'png' }));
        const avatarCanvas = createCanvas(110, 110); 
        const avatarCtx = avatarCanvas.getContext("2d");
        const radius = 10;
        avatarCtx.beginPath();
        avatarCtx.arc(55, 55, 55, 0, Math.PI * 2);
        avatarCtx.closePath();
        avatarCtx.clip();
        avatarCtx.drawImage(userAvatar, 0, 0, avatarCanvas.width, avatarCanvas.height);
        ctx.drawImage(avatarCanvas, 885, 475, 110, 110); 
        
        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(),"Star3.png");

        let channel = client.channels.cache.get(Data.Channel)
        await modal.reply({content: "Thanks For Your Feedback", ephemeral: true}).then(async() =>{
            await channel.send({files:[attachment]})
        })
    }
    if (modal.customId === 'thstar4') {
        let msg =  modal.fields.getTextInputValue('fedd4')
        const canvas = createCanvas(1002, 586); 
        const ctx = canvas.getContext("2d");
        const backgroundImage = await loadImage("./Images/star4.png");
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f2f3f5";
        ctx.font = "35px Arial"; 
        ctx.textBaseline = "middle";
        ctx.textAlign = "right";
        
        ctx.fillText("" + modal.user.username, 870, 530); 

        const charactersPerLine = 34;
        const paragraphs = [];
        for (let i = 0; i < msg.length; i += charactersPerLine) {
            paragraphs.push(msg.slice(i, i + charactersPerLine));
        }
        paragraphs.forEach((paragraph, index) => {
            const yPos = 230 + index * 50; 
            ctx.fillText(paragraph, 960, yPos); 
        });

        const userAvatar = await loadImage(modal.user.avatarURL({ extension: 'png' }));
        const avatarCanvas = createCanvas(110, 110); 
        const avatarCtx = avatarCanvas.getContext("2d");
        const radius = 10;
        avatarCtx.beginPath();
        avatarCtx.arc(55, 55, 55, 0, Math.PI * 2);
        avatarCtx.closePath();
        avatarCtx.clip();
        avatarCtx.drawImage(userAvatar, 0, 0, avatarCanvas.width, avatarCanvas.height);
        ctx.drawImage(avatarCanvas, 885, 475, 110, 110); 
        
        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(),"Star4.png");

        let channel = client.channels.cache.get(Data.Channel)
        await modal.reply({content: "Thanks For Your Feedback", ephemeral: true}).then(async() =>{
            await channel.send({files:[attachment]})
        })
    }
    if (modal.customId === 'thstar5') {
        let msg =  modal.fields.getTextInputValue('fedd5')
        const canvas = createCanvas(1002, 586); 
        const ctx = canvas.getContext("2d");
        const backgroundImage = await loadImage("./Images/star5.png");
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f2f3f5";
        ctx.font = "35px Arial"; 
        ctx.textBaseline = "middle";
        ctx.textAlign = "right";
        
        ctx.fillText("" + modal.user.username, 870, 530); 

        const charactersPerLine = 34;
        const paragraphs = [];
        for (let i = 0; i < msg.length; i += charactersPerLine) {
            paragraphs.push(msg.slice(i, i + charactersPerLine));
        }
        paragraphs.forEach((paragraph, index) => {
            const yPos = 230 + index * 50; 
            ctx.fillText(paragraph, 960, yPos); 
        });

        const userAvatar = await loadImage(modal.user.avatarURL({ extension: 'png' }));
        const avatarCanvas = createCanvas(110, 110); 
        const avatarCtx = avatarCanvas.getContext("2d");
        const radius = 10;
        avatarCtx.beginPath();
        avatarCtx.arc(55, 55, 55, 0, Math.PI * 2);
        avatarCtx.closePath();
        avatarCtx.clip();
        avatarCtx.drawImage(userAvatar, 0, 0, avatarCanvas.width, avatarCanvas.height);
        ctx.drawImage(avatarCanvas, 885, 475, 110, 110); 
        
        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(),"Star5.png");

        let channel = client.channels.cache.get(Data.Channel)
        await modal.reply({content: "Thanks For Your Feedback", ephemeral: true}).then(async() =>{
            await channel.send({files:[attachment]})
        })
    }
})




client.login(`MTIxNTAyODU2MjUyNTAyODQ3Mw.GgFy05.1ep921O5V5xPekKKABTUmaeQ9u5nzh-mkDFQdw`);