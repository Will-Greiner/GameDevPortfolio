import { projects } from "./projects.js"

const container = document.getElementById("project-container")

// Get ID from URL
const params = new URLSearchParams(window.location.search)
const projectId = params.get("id")

// Find the matching project
const project = projects.find(p => p.id === projectId)

if (!project) {
    container.innerHTML = "<p>Project not found.</p>"
} else {
    container.innerHTML = `
    <header class="header">
        <div class="title">
            <a href="index.html" class="home-link">
                <h1>Will Greiner</h1>
            </a>
        </div>
    </header>
    <section class="project-hero">
        <img class="project-hero-image" src="${project.image}" alt="${project.title}" />
        <div class="project-hero-overlay">
            <div class="project-hero-content">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
            </div>
        </div>
    </section>
    <section class="project-detail">
        <div class="project-media">
            ${project.media.map(group => {
                return `
                    <div class="media-group ${group.layout}">
                        ${group.items.map(item => {
                            let content = ""

                            if (item.type === "image") {
                                content = `
                                    <img
                                        src="${item.src}"
                                        alt="${item.alt || project.title}"
                                    />
                                `
                            }

                            if (item.type === "video") {
                                content = `
                                    <video 
                                        muted 
                                        autoplay 
                                        controls 
                                        loop
                                    >
                                        <source src="${item.src}" type="video/mp4">
                                    </video>
                                `
                            }

                            return `
                                <figure class="project-media-item">
                                    ${content}
                                    ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
                                </figure>
                            `
                        }).join("")}
                    </div>
                `
            }).join("")}
    </section>
    `
}