export const projects = [
    {
        id: "Orc",
        title: "Orc Character Design",
        description: "What a cute guy.",
        image: "images/OrcThumbnail.png",
        tags: ["3D Modeling", "Character"],

        media: [
            {
                layout: "single",
                items: [
                    {
                        type:"image",
                        src: "images/orcPristine.png",
                        alt: "Orc image",
                        caption: "This is my first attempt at an original character. I wanted to experiment with cloth, metals, and most importantly organics."
                    }
                ]
            }, 
            {
                layout: "single",
                items: [
                    {
                        type:"image",
                        src: "images/orcCloseup.png",
                        alt: "Orc Closeup",
                        caption: "This model was fully blocked, sculpted, retopologized, textured, and rigged for real time environments by hand."
                    }
                ]
            }, 
            {
                layout: "single",
                items: [
                    {
                        type:"image",
                        src: "images/orcFromBelow.png",
                        alt: "Orc Below",
                        caption: 'My goal was to capture a contradiction of a muscular "monstrous" character in a relaxed and casual setting.'
                    }
                ]
            },
            {
                layout: "single",
                items: [
                    {
                        type:"image",
                        src: "images/orcFromFrontA.png",
                        alt: "Orc Front View",
                    }
                ]
            },
            {
                layout: "single",
                items: [
                    {
                        type:"image",
                        src: "images/orcFromBackA.png",
                        alt: "Orc Rear View",
                    },
                ]
            },
            {
                layout: "single",
                items: [
                    {
                        type:"image",
                        src: "images/orcWire.png",
                        alt: "Orc WireFrame",
                    },
                ]
            }
        ]
    },
    {
        id: "DaedalusTower",
        title: "Daedalus' Tower",
        description: "Demo of my first full indie game, developed for a senior capstone project.",
        image: "images/DaedThumbnail.png",
        tags: ["Game Design", "3D Modeling", "Environment"],

        media: [
            {
                layout: "single",
                items: [
                    {
                        type: "video",
                        src: "video/GameplayOnlyVideo.mp4",
                        alt: "Trailer"
                    }
                ]
            },
            {
                layout: "single",
                items: [
                    {
                        type: "image",
                        src: "images/TowerInterior.png",
                        alt: "No-Logo",
                        caption: "My first real project, focused on atmospheric vibes and simple yet effective puzzle mechanics."
                    }
                ]
            },
            {
                layout: "side-by-side",
                items: [
                    {
                        type: "image",
                        src: "images/TowerInterior.png",
                        alt: "Crunched",
                        caption: "Resolution Crunching was used to capture a unique vibe and retro style."
                    },
                    {
                        type: "image",
                        src: "images/TowerInteriorNonCompressed.png",
                        alt: "NonCrunched",
                        caption: "This is how the game would look without it.\n"
                    }
                ]
            },
            {
                layout: "side-by-side",
                items: [
                    {
                        type: "video",
                        src: "video/AssetShowcase.mp4.mov",
                        alt: "Assets",
                        caption: "Assets in unity shown through my compression filter."
                    },
                    {
                        type: "image",
                        src: "images/EditorAssets.png",
                        alt: "EditorAssets",
                        caption: "Assets in editor, no compression"
                    }
                ]
            }
        ],

        embed: [
            {
            src: "https://itch.io/embed-upload/17245792?color=333333",
            }
        ]
    },
    {
        id: "Carl",
        title: "Carl the Cupcake",
        description: "First Experimentation with Character Design and Animation",
        image: "images/JumpingCarl.png",
        tags: ["3D Modeling", "Character"],

        media: [
            {
                layout: "single",
                items: [
                    {
                        type: "image",
                        src: "images/JumpingCarl.png",
                        alt: "CarlJumping",
                        caption: "My first go at making a character, copying a very simple model from the FNAF franchise. This was made to be game ready as it was used in a test project."
                    }
                ]
            },
            {
                layout: "side-by-side",
                items: [
                    {
                        type: "video",
                        src: "video/Attack Carl.mp4",
                        alt: "Attack animation",
                        caption: "Attack Animation",
                    },
                    {
                        type: "video",
                        src: "video/Idle Carl.mp4",
                        alt: "Idle animation",
                        caption: "Idle Animation"
                    }
                ]
            },
            {
                layout: "single",
                items: [
                    {
                        type: "image",
                        src: "images/WireCarl.png",
                        alt: "WireCarl",
                        caption: "Simple and Effective Wireframe"
                    }
                ]
            }
        ]
    },
    {
        id: "Porygon",
        title: "Asteroids Project",
        description: "My first ever game dev project, Asteroids but pokemon themed.",
        image: "images/will-greiner-catchingporys.jpg",
        tags: ["Game Design", "Environment"],

        media: [
            {
                layout: "side-by-side",
                items: [
                    {
                        type: "image",
                        src: "images/will-greiner-catchingporys.jpg",
                        alt: "image",
                        caption: "First Ever Assets"
                    },
                    {
                        type: "image",
                        src: "images/CatchinPorysWire.png",
                        alt: "image",
                        caption: "Wireframe"
                    }
                ]
            },
            {
                layout: "single",
                items: [
                    {
                        type: "video",
                        src: "video/PoryGamplay.mp4",
                        title: "Gameplay",
                        caption: "SimpleGameplay"
                    }
                ]
            },
        ]
    },
]