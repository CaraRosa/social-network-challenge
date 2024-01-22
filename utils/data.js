const users = [
    { username: 'sparklyNinja', email: 'sparklyNinja@gmail.com' },
    { username: 'cosmicExplorer', email: 'cosmicExplorer@gmail.com' },
    { username: 'velvetThunder', email: 'velvetThunder@gmail.com' },
    { username: 'moonlightPioneer', email: 'moonlightPioneer@gmail.com' },
    { username: 'neonPhoenix', email: 'neonPhoenix@gmail.com' },
    { username: 'stellarVoyager', email: 'stellarVoyager@gmail.com' },
    { username: 'whisperingZephyr', email: 'whisperingZephyr@gmail.com' } ,
    { username: 'silverSpectre', email: 'silverSpectre@gmail.com' },
    { username: 'quantumJester', email: 'quantumJester@gmail.com' },
    { username: 'midnightSorcerer', email: 'midnightSorcerer@gmail.com' },
    { username: 'astralHarmony', email: 'astralHarmony@gmail.com' },
    { username: 'radiantNomad', email: 'radiantNomad@gmail.com' },
    { username: 'mysticTraveller', email: 'mysticTraveller@gmail.com' },
    { username: 'celestialEcho', email: 'celestialEcho@gmail.com' },
    { username: 'obsidianPilgrim', email: 'obsidianPilgrim@gmail.com' },
    { username: 'etherealSphinx', email: 'etherealSphinx@gmail.com' },
    { username: 'luminousSculptor', email: 'luminousSculptor@gmail.com' },
    { username: 'serendipityScribe', email: 'serendipityScribe@gmail.com' },
    { username: 'kaleidoscopeDreamer', email: 'kaleidoscopeDreamer@gmail.com' },
    { username: 'cosmicWhisperer', email: 'cosmicWhisperer@gmail.com' },
]

const thoughts = [
    { thoughtText: 'Random thought 1', username: 'sparklyNinja'},
    { thoughtText: 'Random thought 2', username: 'cosmicExplorer' },
    { thoughtText: 'Random thought 3', username: 'velvetThunder' },
    { thoughtText: 'Random thought 4', username: 'moonlightPioneer', },
    { thoughtText: 'Random thought 5', username: 'neonPhoenix' },
    { thoughtText: 'Random thought 6', username: 'stellarVoyager' },
    { thoughtText: 'Random thought 7', username: 'whisperingZephyr' },
    { thoughtText: 'Random thought 8', username: 'silverSpectre' },
    { thoughtText: 'Random thought 9', username: 'quantumJester' },
    { thoughtText: 'Random thought 10', username: 'midnightSorcerer' },
  ];

  const reactions = [
    { reactionBody: 'Nice!', username: 'sparklyNinja' },
    { reactionBody: 'Interesting!', username: 'cosmicExplorer' },
    { reactionBody: 'Nice!', username: 'velvetThunder' },
    { reactionBody: 'Interesting!', username: 'moonlightPioneer' },
    { reactionBody: 'Nice!', username: 'neonPhoenix' },
    { reactionBody: 'Interesting!', username: 'user2' },
    { reactionBody: 'Nice!', username: 'user1' },
    { reactionBody: 'Interesting!', username: 'user2' },
    { reactionBody: 'Nice!', username: 'user1' },
    { reactionBody: 'Interesting!', username: 'user2' },
    { reactionBody: 'Nice!', username: 'user1' },
    { reactionBody: 'Interesting!', username: 'user2' },
      
  ];

  const friends = [
    { username: 'astralHarmony', email: 'astralHarmony@gmail.com' },
    { username: 'radiantNomad', email: 'radiantNomad@gmail.com' },
    { username: 'mysticTraveller', email:  'mysticTraveller@gmail.com'},
    { username: 'celestialEcho', email: 'celestialEcho@gmail.com' },
    { username: 'obsidianPilgrim', email: 'obsidianPilgrim@gmail.com' },
    { username: 'etherealSphinx', email:  'etherealSphinx@gmail.com'},
    { username: 'luminousSculptor', email:  'luminousSculptor@gmail.com'},
    { username: 'serendipityScribe', email: 'serendipityScribe@gmail.com' },
    { username: 'kaleidoscopeDreamer', email: 'kaleidoscopeDreamer@gmail.com' },
    { username: 'cosmicWhisperer', email:  'cosmicWhisperer@gmail.com'},
    
  ];
  
  module.exports = { users, thoughts, reactions, friends };