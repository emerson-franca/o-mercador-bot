import "dotenv/config";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
} from "discord.js";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"],
});

const weaponsBtn = new ButtonBuilder()
  .setLabel("Armas")
  .setEmoji("⚔️")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("weapons");

const ArmorsBtn = new ButtonBuilder()
  .setLabel("Armaduras")
  .setEmoji("🛡️")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("armors");

const PotionsBtn = new ButtonBuilder()
  .setLabel("Poções")
  .setEmoji("🧪")
  .setStyle(ButtonStyle.Primary)
  .setCustomId("potions");

const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
  weaponsBtn,
  ArmorsBtn,
  PotionsBtn
);

client.on("messageCreate", (message) => {
  if (message.content === "!mercadorias") {
    message.reply({
      content: "Escolha uma categoria:",
      components: [row],
    });
  }
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "potions") {
      interaction.reply("Temos suco de laranja, skinka da verde, pitu cola");
    } else if (interaction.customId === "weapons") {
      interaction.reply("Temos espadas, machados, arcos, bestas");
    } else if (interaction.customId === "armors") {
      interaction.reply("Temos armaduras de couro, ferro, adamante");
    }
  }
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is online.`);
});

client.login(process.env.TOKEN);
