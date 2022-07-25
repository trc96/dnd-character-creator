const Classes = [
    {
        id: 1,
        name: 'Barbarian',
        description: 'A fierce warrior of primitive background who can enter a battle rage.',
        hitDie: 'd12',
        primaryAbility:'Strength',
        saves: 'Strength & Constitution'
    },
    {
        id: 2,
        name: 'Bard',
        description: 'An inspiring magician whose power echoes the music of creation.',
        hitDie: 'd8',
        primaryAbility:'Charisma',
        saves: 'Dexterity & Charisma'
    },
    {
        id: 3,
        name: 'Cleric',
        description: 'A priestly champion who wields divine mafic in servie of a higher power.',
        hitDie: 'd8',
        primaryAbility:'Wisdom',
        saves: 'Wisdom & Charisma'
    },
    {
        id: 4,
        name: 'Druid',
        description: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
        hitDie: 'd8',
        primaryAbility:'Wisdom',
        saves: 'Intelligence & Wisdom'
    },
    {
        id: 5,
        name: 'Fighter',
        description: 'A master of martial combat, skilled with a variety of weapons and armor.',
        hitDie: 'd10',
        primaryAbility:'Strength or Dexterity',
        saves: 'Strength & Constitution'
    },
    {
        id: 6,
        name: 'Monk',
        description: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
        hitDie: 'd8',
        primaryAbility:'Dexterity & Wisdom',
        saves: 'Strength & Dexterity'
    },
    {
        id: 7,
        name: 'Paladin',
        description: 'A holy warrior bound to a sacred oath.',
        hitDie: 'd10',
        primaryAbility:'Strength & Charisma',
        saves: 'Wisdom & Charisma'
    },
    {
        id: 8,
        name: 'Ranger',
        description: 'A warrior who combats threats on the edges of civilization.',
        hitDie: 'd10',
        primaryAbility:'Dexterity & Wisdom',
        saves: 'Strength & Dexterity'
    },
    {
        id: 9,
        name: 'Rogue',
        description: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
        hitDie: 'd8',
        primaryAbility:'Dexterity',
        saves: 'Dexterity & Intelligence'
    },
    {
        id: 10,
        name: 'Sorcerer',
        description: 'A spellcaster who draws on inherent mafic from a gift or bloodline.',
        hitDie: 'd6',
        primaryAbility:'Charisma',
        saves: 'Constitution & Charisma'
    },
    {
        id: 11,
        name: 'Warlock',
        description: 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
        hitDie: 'd8',
        primaryAbility:'Charisma',
        saves: 'Wisdom & Charisma'
    },
    {
        id: 12,
        name: 'Wizard',
        description: 'A scholarly magic-user capable of manipulating the structures of reality.',
        hitDie: 'd6',
        primaryAbility:'Intelligence',
        saves: 'Intelligence & Wisdom'
    }
]

export default Classes;