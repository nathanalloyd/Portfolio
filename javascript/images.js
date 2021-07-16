const homefunction = () => {
    document.getElementById("bio").style.display ='none'
    document.getElementById("projects").style.display ='none'
}

const biofunction = () => {
    document.getElementById("bio").style.display ='block'
    document.getElementById("projects").style.display ='none'
}

const projectsfunction = () => {
    document.getElementById("projects").style.display ='block'
    document.getElementById("bio").style.display ='none'
}