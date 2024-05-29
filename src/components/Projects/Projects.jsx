import React, { useState, useEffect } from "react";
import './projects.css';

function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchRepositories() {
            try {
                const response = await fetch('https://api.github.com/users/filipevolz/repos');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const filteredRepositories = Array.isArray(data) 
                    ? data.filter(repo => ["GitHub-API", "ignite_feed", "landing-page", "my-blog", "pokedex-API", "advice-api"].includes(repo.name))
                    : [];
                setRepositories(filteredRepositories);
            } catch (error) {
                console.error('Error fetching repositories :', error);
            }
        }

        fetchRepositories();
    }, []); 

    return (
        <section id="projects" className="projects">
            <ul className="list-items">
                {repositories.map((repo, index) => (
                    <li key={index} className="list-item-repo">
                        <h2>{repo.name}</h2>
                        <p><span>Language:</span> {repo.language}</p>
                        <p><span>Description:</span> {repo.description}</p>
                        <ul>
                            <span>Topics:</span>
                            {repo.topics && repo.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                            ))}
                        </ul>
                        <p><span>URL:</span> <a href={repo.html_url}>{repo.html_url}</a></p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
