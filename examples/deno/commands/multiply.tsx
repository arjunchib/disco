import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  InteractionType,
} from "discord_api_types";
import { Command, Interaction, ChannelMessageWithSource } from "blurp";

export const command: Command = {
  name: "multiply",
  description: "A command to multiply numbers",
  options: [
    {
      name: "a",
      type: ApplicationCommandOptionType.Number,
      description: "First operand",
      required: true,
    },
    {
      name: "b",
      type: ApplicationCommandOptionType.Number,
      description: "Second operand",
      required: true,
    },
  ],
};

export default function Multiply(interaction: Interaction) {
  if (
    interaction.payload.type === InteractionType.ApplicationCommand &&
    interaction.payload.data.type === ApplicationCommandType.ChatInput
  ) {
    const a = interaction.payload.data.options?.find((opt) => opt.name === "a");
    const b = interaction.payload.data.options?.find((opt) => opt.name === "b");
    if (
      a?.type !== ApplicationCommandOptionType.Number ||
      b?.type !== ApplicationCommandOptionType.Number
    )
      return;
    interaction.reply(
      <ChannelMessageWithSource
        content={`${a.value * b.value}`}
      ></ChannelMessageWithSource>
    );
  }
  interaction.reply(
    <ChannelMessageWithSource content="Error!"></ChannelMessageWithSource>
  );
}
