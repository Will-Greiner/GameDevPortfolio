import { projects } from "./projects.js"

const gallery = document.getElementById("project-gallery")
const filters = document.getElementById("project-filters")

const allTags = ["All", "Game Design", "3D Modeling", "Environment", "Character", ...new Set(projects.flatMap(project => projects.tags || []))]

function renderFilters() {
    filters.innerHTML = allTags.map(tag => `
        <button class="filter-button ${tag === "All" ? "active" : ""}" data-tag="${tag}">
            ${tag}
        </button>
    `).join("")

    document.querySelectorAll(".filter-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-button").forEach(btn => {
                btn.classList.remove("active")
            })

            button.classList.add("active")
            renderProjects(button.dataset.tag)
        })
    })
}

function renderProjects(activeTag = "All") {
    const filteredProjects = activeTag === "All" ? projects : projects.filter(project => project.tags?.includes(activeTag))

        gallery.innerHTML = filteredProjects.map(project => `
            <a class="project-card" href="project.html?id=${project.id}">
            <div class="project-card-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card-overlay">
                <h3>${project.title}</h3>
                </div>
            </div>
            </a>
        `).join("");
}

renderFilters()
renderProjects()