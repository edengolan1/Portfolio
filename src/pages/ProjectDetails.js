import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../components/Data';
import '../styles/ProjectDetails.css';
import detailsAnimalAddCommentImage from '../../public/images/detailsAnimalAddComment.png';
import Animals from '../../public/images/Animals.png';
import loggingAnimals from '../../public/images/loggingAnimals.png';
import addAnimal from '../../public/images/addAnimal.png';
import editAnimal from '../../public/images/editAnimal.png';
import cinema from '../../public/images/cinema.png';
import viewStore from '../../public/images/viewStore.png';
import homeStore from '../../public/images/homeStore.png';
import detailsItem from '../../public/images/detailsItem.png';
import listStore from '../../public/images/listStore.png';
import detailsMovie from '../../public/images/detailsMovie.png';
import editMovie from '../../public/images/editMovie.png';
import deleteMovie from '../../public/images/deleteMovie.png';

function ProjectDetails() {

  const { Id } = useParams(); 
  const project = projects.find(project => project.Id === parseInt(Id)); 

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='detailsProjectDiv'>
        <div className='details'>
            <div className='title'>
              <h1>My Project</h1>
            </div>
            <div>
                <a href={project.LinkGitHub} target="_blank" rel="noopener noreferrer" className='ButtonLinkes'>
                 <button>GitHub</button>
                </a>
                <a href={project.LinkWeb} target="_blank" rel="noopener noreferrer" className='ButtonLinkes'>
                 <button>Website</button>
                </a>
            </div>
            <div>
                <p className='summaryDetails'>{project.Summary}</p>
            </div>
            <div>
               <h2>{project.Name}</h2>
            </div>
            {project.Id === 1 && (
                    <div>
                        <div>
                            <img src={cinema} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can view details about the movie:</p>
                            <img src={detailsMovie} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can edit details of movie:</p>
                            <img src={editMovie} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can delete the movie:</p>
                            <img src={deleteMovie} alt={project.Name}/>
                        </div>
                    </div>
                )}
            {project.Id === 2 && (
                    <div>
                       <div>
                            <img src={Animals} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can connect to admin user and do actions:</p>
                            <img src={loggingAnimals} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can view details the animals:</p>
                            <img src={detailsAnimalAddCommentImage} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can add an animal:</p>
                            <img src={addAnimal} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can edit the animal:</p>
                            <img src={editAnimal} alt={project.Name}/>
                        </div>
                    </div>
                )}
            {project.Id === 3 && (
                    <div>
                       <div>
                            <img src={homeStore} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can sort the items and filter the items:</p>
                            <img src={viewStore} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can view details about the item:</p>
                            <img src={detailsItem} alt={project.Name}/>
                        </div>
                        <div>
                            <p>You can add and remove items from shopping bag:</p>
                            <img src={listStore} alt={project.Name}/>
                        </div>
                    </div>
                )}
        </div>
    </div>
  );
}

export default ProjectDetails;