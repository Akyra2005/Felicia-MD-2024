let handler = async (m, { command, args }) => {
    try {
        let user = global.db.data.users[m.sender];
        let buff = (user.atm < 10 ? '5' : user.atm < 20 ? '10' : user.atm < 25 ? '15' : user.atm < 30 ? '20' : user.atm < 35 ? '25' : user.atm < 40 ? '30' : user.atm < 45 ? '55' : user.atm < 50 ? '60' : user.atm < 55 ? '65' : user.atm < 60 ? '70' : user.atm < 65 ? '75' : user.atm < 70 ? '80' : user.atm < 75 ? '85' : user.atm < 80 ? '90' : user.atm < 85 ? '95' : user.atm < 90 ? '100' : user.atm < 95 ? '105' : user.atm < 100 ? '110' : '');

        const lgocraft = 'C R A F T I N G';

        const materials = `
*MATERIALS*

*Pickaxe ⛏️*
- 40 Kayu
- 20 Batu
- 20 Iron
- 80 String
Level Maks 11 📊

*Ax 🛶*
- 40 Kayu
- 20 Batu
- 20 Iron
- 80 String
Level Maks 11 📊

*Sword ⚔️*
- 40 Kayu
- 60 Iron
Level Maks 11 📊

*Fishingrod 🎣*
- 40 Kayu
- 8 Iron
- 80 String
Level Maks 4 📊

*Armor 🥼*
- 120 Iron
- 4 Emerald
- 20 Diamond
Level Maks 11 📊

*ATM 💳*
- ${5 * buff} Plastik PVC
- ${1 * buff} Semikonduktor
- ${40000 * buff} Money (Biaya Admin)
Level Maks 20 📊
`;

        const craftingTools = `
*C R A F T  A  T O O L*

- Sword ⚔️: .craft sword (Crafting A Sword)
- Pickaxe ⛏️: .craft pickaxe (Crafting A Pickaxe)
- Ax 🛶: .craft ax (Crafting A Ax)
- Fishingrod 🎣: .craft fishingrod (Crafting A Fishingrod)
- Armor 🥼: .craft armor (Crafting A Armor)
- ATM 💳: .craft atm (Crafting A Atm)
`;

        const message = `${lgocraft}\n\n${materials}\n\n${craftingTools}`;

        if (/craft|Crafting/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count);

            switch (command.toLowerCase()) {
                case 'pickaxe':
                case 'ax':
                case 'sword':
                case 'fishingrod':
                case 'armor':
                case 'atm':
                    if (user[command] > 10) return m.reply(`Kamu Sudah Memiliki ${command.charAt(0).toUpperCase() + command.slice(1)}`);
                    if (craftingCheck(user, command, buff)) return m.reply(`Bahan Tidak Cukup\n\n${craftingRequirements(command)}`);
                    craftItem(user, command, buff);
                    m.reply(`Sukses Membuat 1 ${command.charAt(0).toUpperCase() + command.slice(1)} 🔨`);
                    break;

                default:
                    return await conn.sendMessage(m.chat, message);
            }
        }
    } catch (err) {
        m.reply("Error\n\n\n" + err.stack);
    }
};

function craftingCheck(user, item, buff) {
    switch (item.toLowerCase()) {
        case 'pickaxe':
            return user.rock < 20 || user.wood < 40 || user.iron < 20 || user.string < 80;
        case 'ax':
            return user.rock < 20 || user.wood < 40 || user.iron < 20 || user.string < 80;
        case 'sword':
            return user.wood < 40 || user.iron < 60;
        case 'fishingrod':
            return user.wood < 40 || user.iron < 8 || user.string < 80;
        case 'armor':
            return user.iron < 120 || user.emerald < 4 || user.diamond < 20;
        case 'atm':
            return user.plastikpvc < 5 * buff || user.money < 40000 * buff || user.semikonduktor < 1 * buff;
        default:
            return false;
    }
}

function craftingRequirements(item) {
    switch (item.toLowerCase()) {
        case 'pickaxe':
        case 'ax':
            return `Kamu Memerlukan:\n40 Kayu🪵\n20 Iron⛓\n80 String🕸️\n20 Batu🪨`;
        case 'sword':
            return `Kamu Memerlukan:\n40 Kayu🪵\n60 Iron⛓️`;
        case 'fishingrod':
            return `Kamu Memerlukan:\n40 Kayu🪵\n8 Iron⛓\n80 String🕸️`;
        case 'armor':
            return `Kamu Memerlukan:\n120 Iron ⛓️\n4 Emerald ❇️\n20 Diamond 💎`;
        case 'atm':
            return `Kamu Memerlukan:\n${40000} Money 💵 (Biaya Admin)\n${5} Plastik PVC ⬜\n${1} Semikonduktor 💽`;
        default:
            return '';
    }
}

function craftItem(user, item, buff) {
    switch (item.toLowerCase()) {
        case 'pickaxe':
        case 'ax':
            user.wood -= 40;
            user.iron -= 20;
            user.rock -= 20;
            user.string -= 80;
            user[`${item.toLowerCase()}durability`] = 40;
            user[item.toLowerCase()] += 1;
            break;
        case 'sword':
            user.wood -= 40;
            user.iron -= 60;
            user[`${item.toLowerCase()}durability`] = 40;
            user[item.toLowerCase()] += 1;
            break;
        case 'fishingrod':
            user.wood -= 40;
            user.iron -= 8;
            user.string -= 80;
            user[`${item.toLowerCase()}durability`] = 40;
            user[item.toLowerCase()] += 1;
            break;
        case 'armor':
            user.emerald -= 4;
            user.iron -= 120;
            user.diamond -= 20;
            user[`${item.toLowerCase()}durability`] = 50;
            user[item.toLowerCase()] += 1;
            break;
        case 'atm':
            user.plastikpvc -= 5 * buff;
            user.money -= 40000 * buff;
            user.pengeluaran += 40000 * buff;
            user.semikonduktor -= 1 * buff;
            user.atm += 1;
            user.fullatm += 5000000 * buff;
            break;
    }
}

handler.help = ['craft'];
handler.tags = ['rpg'];
handler.command = /^(craft|crafting|chant)/i;
handler.register = false;

export default handler

