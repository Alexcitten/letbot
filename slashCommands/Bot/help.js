const {EmbedBuilder} = require('discord.js')

module.exports = {
    name: "help",
    usage: 'what',
    category: "Загадка",
    description: "Сможешь ли ты разгадать загадку?",
    ownerOnly: false,
    run: async (client, interaction, args) => {

        const embed = new EmbedBuilder()
        .setTitle(`0JfQsNGB0LrQsNC80LjQu9C4`)
        .addFields([
            {name: `Загадка LetCore`, value: `❯ Слышали о цикаде 3301? Ну вот. В этом боте будут загадки, легче конечно же, но кто отгадает их - тот получит криптовалютный приз. Начнём же.`},
            {name: `Подробнее`, value: `❯ Первая загадка будет паролем к команде /core, где этот пароль будет? Не знаю. Будут ли ещё загадки? Не знаю. Вы должны думать, экспериментировать. Так же, будут непонятные вещи чтобы запутать тебя! Кстати, в будущем будут ещё такие ивенто-боты, так что готовьтесь к новым загадкам! Удачи!`}
        ])
        .setColor('#FF8747')
        .setFooter({
            text: '❯❯❯ | Да победит сильнейший. Объединяйтесь, думайте, путайтесь, веселитесь. Путать вас будут много.',
            iconURL: 'https://cdn.discordapp.com/attachments/1028025876639666186/1038462550670594098/HEX.png'
        });

        await interaction.reply({ 
            embeds: [embed],
            ephemeral: false
        });
    },
};
