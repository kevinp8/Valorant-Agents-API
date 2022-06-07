const express = require('express')
const app = express()
const port = 3000

const agents = [
    {brimstone: {
        bio: 'Joining from the USA, Brimstone\'s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.',
        role: 'controller',
        abilities: {
            incendiary: {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.'
            },
            'stim beacon': {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.'
            },
            'sky smoke': {
                type: 'signature',
                cost:  100,
                desc: 'EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.'
            },
            'orbital strike': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.'
            }

        }
    }},
    {phoenix: {
        bio: 'Hailing from the U.K., Phoenix\'s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he\'s got backup or not, he\'ll rush into a fight on his own terms.',
        role: 'duelist',
        abilities: {
            blaze: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.'
            },
            curveball: {
                type: 'basic',
                cost:  250,
                desc: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.'
            },
            'hot hands': {
                type: 'signature',
                recharge: '2 kills',
                desc: 'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.'
            },
            'run it back': {
                type: 'utlimate',
                'ult points': 6,
                desc: 'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.'
            } 
        }
    }},
    {sage: {
        bio: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        role: 'sentinel',
        abilities: {
            'barrier orb': {
                type: 'basic',
                cost: 400,
                desc: 'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.'
            },
            'slow orb': {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.'
            },
            'healing orb': {
                type: 'signature',
                recharge: '45 seconds',
                desc: 'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.'
            },
            resurrection: {
                type: 'ultimate',
                'ult points': 8,
                desc: 'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.'
            }
        }
    }},
    {sova: {
        bio: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        role: 'initiator',
        abilities: {
            'owl drone': {
                type: 'basic',
                cost: 400,
                desc: 'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.'
            },
            'shock bolt': {
                type: 'basic',
                cost: 150,
                desc: 'EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.'
            },
            'recon bolt': {
                type: 'signature',
                recharge: '40 seconds',
                desc: 'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.'
            },
            "hunter's fury": {
                type: 'ultimate',
                'ult points': 8,
                desc: 'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.'
            }
        }
    }},
    {viper: {
        bio: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
        role: 'controller',
        abilities: {
            'snake bite': {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.'
            },
            'poison cloud' : {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.'
            },
            'tocix screen': {
                type: 'signature',
                recharge: '8 seconds',
                desc: 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.'
            },
            "viper's pit": {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.'
            }
        }
    }},
    {cypher: {
        bio: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        role: 'sentinel',
        abilities: {
            trapwire: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.'
            },
            'cyber cage': {
                type: 'basic',
                cost: 100,
                desc: 'INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.'
            },
            spycam: {
                type: 'signature',
                recharge: '15 seconds (Recalled)/45 s (Destroyed), Dart: 6 seconds',
                desc: 'EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.'
            },
            'neural theft': {
                type: 'ultimate',
                'ult points': 6,
                desc: 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.'
            }
        }
    }},
    {reyna: {
        bio: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        role: 'duelist',
        abilities: {
            leer: {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.'
            },
            devour: {
                type: 'signature',
                cost: 200,
                desc: 'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.'
            },
            dismiss: {
                type: 'signature',
                cost: 200,
                desc: 'INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.'
            },
            empress: {
                type: 'ultimate',
                'ult points': 6,
                desc: 'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.'
            }
        }
    }},
    {killjoy: {
        bio: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        role: 'sentinel',
        abilities: {
            alarmbot: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.'
            },
            nanoswarm: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.'
            },
            turret: {
                type: 'signature',
                recharge: '45 seconds (Destroyed), 20 seconds (Recalled)',
                desc: 'EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.'
            },
            lockdown: {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.'
            },
        }
    }},
    {breach: {
        bio: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
        role: 'initiator',
        abilities: {
            aftershock: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.'
            },
            flashpoint: {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.'
            },
            'fault line': {
                type: 'signature',
                recharge: '40 seconds',
                desc: 'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.'
            },
            'rolling thunder': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.'
            },
        }
    }},
    {omen: {
        bio: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        role: 'controller',
        abilities: {
            'shrouded step': {
                type: 'basic',
                cost: 100,
                desc: 'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.'
            },
            paranoia: {
                type: 'basic',
                cost: 300,
                desc: 'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.'
            },
            'dark cover': {
                type: 'signature',
                cost: 150,
                recharge: '30 seconds',
                desc: 'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the marker closer.'
            },
            'from the shadows': {
                type: 'utltimate',
                'ult points': 7,
                desc: 'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.'
            },
        }
    }},
    {jett: {
        bio: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        role: 'duelist',
        abilities: {
            drift: {
                type: 'passive',
                desc: 'Fall slowly in the air'
            },
            cloudburst: {
                type: 'basic',
                cost: 200,
                desc: 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.'
            },
            updraft: {
                type: 'basic',
                cost: 150,
                desc: 'INSTANTLY propel Jett high into the air.'
            },
            tailwind: {
                type: 'signature',
                recharge: '2 kills',
                desc: 'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.'
            },
            'blade storm': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.'
            },
        }
    }},
    {raze: {
        bio: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
        role: 'duelist',
        abilities: {
            'boom bot': {
                type: 'basic',
                cost: 300,
                desc: 'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.'
            },
            'blast pack': {
                type: 'basic',
                cost: 200,
                desc: 'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.'
            },
            'paint shells': {
                type: 'signature',
                recharge: '2 kills',
                desc: 'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.'
            },
            showstopper: {
                type: 'ultimate',
                'ult points': 8,
                desc: 'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.'
            },
        }
    }},
    {skye: {
        bio: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
        role: 'initiator',
        abilities: {
            regrowth: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.'
            },
            trailblazer: {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.'
            },
            'guiding light': {
                type: 'signature',
                cost: 250,
                recharge:  '40 seconds',
                desc: 'EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.'
            },
            seekers: {
                type: 'ultimate',
                cost: 1,
                desc: 'EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.'
            },
        }
    }},
    {yoru: {
        bio: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        role: 'duelist',
        abilities: {
            fakeout: {
                type: 'basic',
                cost: 100,
                desc: 'EQUIP an echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo. USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.'
            },
            blindside: {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.'
            },
            gatecrash: {
                type: 'signature',
                cost: 200,
                recharge: '2 kills',
                desc: 'EQUIP to harness a rift tether. FIRE to send the tether out moving forward. ALT FIRE to place a tether in place. ACTIVATE to teleport to the tether\'s location. USE to trigger a fake teleport.'
            },
            'dimensional drift': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP a mask that can see between dimensions. FIRE to drift into Yoru\'s dimension, unable to be affected or seen by enemies from the outside.'
            },
        }
    }},
    {astra: {
        bio: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
        role: 'controller',
        abilities: {
            'gravity well': {
                type: 'basic',
                recharge: '45 seconds',
                desc: 'ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside vulnerable.'
            },
            'nova pulse': {
                type: 'basic',
                recharge: '45 seconds',
                desc: 'ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.'
            },
            'nebula / dissipate': {
                type: 'basic',
                recharge: '25 seconds',
                desc: 'USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star\'s location before returning.'
            },
            'astral form': {
                type: 'signature',
                cost: 150,
                desc: 'ACTIVATE to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well.'
            },
            'cosmic divide': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.'
            },
        }
    }},
    {'kay/o': {
        bio: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        role: 'initiator',
        abilities: {
            'frag/ment': {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.'
            },
            'flash/drive': {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.'
            },
            'zero/point': {
                type: 'signature',
                recharge: '40 seconds',
                desc: 'EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.'
            },
            'null/cmd': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are suppressed for a short duration. While overloaded, KAY/O gains combat stim and can be re-stabilized if downed.'
            },
        }
    }},
    {chamber: {
        bio: "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
        role: 'sentinel',
        abilities: {
            trademark: {
                type: 'basic',
                cost: 200,
                desc: 'PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.'
            },
            headhunter: {
                type: 'basic',
                cost: 100,
                desc: 'ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.'
            },
            rendezvous: {
                type: 'signature',
                recharge: '20 seconds',
                desc: 'PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.'
            },
            'tour de force': {
                type: 'ultimate',
                'ult points': 7,
                desc: 'ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.'
            },
        }
    }},
    {neon: {
        bio: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        role: 'duelist',
        abilities: {
            'fast lane': {
                type: 'basic',
                cost: 300,
                desc: 'FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.'
            },
            'relay bolt': {
                type: 'basic',
                cost: 200,
                desc: 'INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.'
            },
            'high gear': {
                type: 'signature',
                recharge: '2 kills',
                desc: 'INSTANTLY channel Neon\'s high power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.'
            },
            overdrive: {
                type: 'ultimate',
                'ult points': 7,
                desc: 'Unleash Neon\'s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.'
            },
        }
    }},
    {fade: {
        bio: "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
        role: 'initiator',
        abilities: {
            prowler: {
                type: 'basic',
                cost: 250,
                desc: 'EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact.'
            },
            seize: {
                type: 'basic',
                cost: 200,
                desc: 'EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed.'
            },
            haunt: {
                type: 'signature',
                recharge: '40 seconds',
                desc: 'EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.'
            },
            nightfall: {
                type: 'ultimate',
                'ult points': 7,
                desc: 'EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are marked by terror trails, deafened, and decayed.'
            },
        }
    }},
]

app.listen(port, () => {
    console.log('Server now live')
})

app.get('/', (req, res)=> {
    res.send('go to /api/(agent name or role)')
})

app.get('/api', (req, res) => {
    res.json(agents)
})

app.get('/api/:agent', (req, res) => {
    const agent = req.params.agent.trim().toLowerCase()
    const findAgent = agents.find(i => agent in i)
    if (findAgent) res.json(findAgent)
    else res.send('agent not found')
})