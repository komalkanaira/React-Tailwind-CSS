import { useState } from "react";
import Projectsidebar from "./components/projectsidebar.jsx";
import Newproject from "./components/newproject.jsx";
import Noprojectselected from "./components/noprojectselected.jsx";
import Selectedproject from "./components/selectedproject.jsx";


function App() {

  const[projectstate,setProjectstate]=useState({
selectedprojectID:undefined,
projects:[],
tasks:[]
  });

  function handleStartAddProject(){
    setProjectstate((prevstate)=>{
      return{
        ...prevstate,
        selectedprojectID:null , 
      };
    });
  }
  function handleAddProject(projectdata){
    setProjectstate((prevstate)=>{
      const newProject={
        ...projectdata,
        id:Math.random()
      }
      return{
  ...prevstate,
  selectedprojectID :undefined,
  projects:[...prevstate.projects,newProject]
      }
    })
  }
  
  function handlecancel(){
    setProjectstate((prevstate)=>{
      return{
        ...prevstate,
        selectedprojectID:undefined , 
      };
    });
  }

function handleSelectedProject(id){
  setProjectstate((prevstate)=>{
    return{
      ...prevstate,
      selectedprojectID:id , 
    };
  });
}

function handleDeleteProject(){
  setProjectstate((prevstate)=>{
    return{
      ...prevstate,
      selectedprojectID:undefined , 
      projects:prevstate.projects.filter((project)=>project.id!==prevstate.selectedprojectID)
    };
  });
}

function handleAddtask(text){
  setProjectstate((prevstate)=>{
    const taskId=Math.random();
    const newTask={
    text:text,
    projectId:prevstate.selectedprojectID,
    id:taskId,
    
    };
    return{
...prevstate,
tasks:[...prevstate.tasks,newTask]
    };
  });
}

function handleDeletetask(id){
  setProjectstate((prevstate)=>{
    return{
      ...prevstate,
      tasks:prevstate.tasks.filter((task)=>task.id!==id)
    };
  });
}

const selectedProject=projectstate.projects.find((project)=>project.id===projectstate.selectedprojectID);

  let content=<Selectedproject 
  project={selectedProject} 
  onDelete={handleDeleteProject}
  onAddtask={handleAddtask}
  onDeletetask={handleDeletetask}
  tasks={projectstate.tasks}
 />;

  if(projectstate.selectedprojectID===null){
   content= <Newproject onadd={handleAddProject} oncancle={handlecancel}/>;
  }
  else if(projectstate.selectedprojectID===undefined){
   content=<Noprojectselected onStartaddproject={handleStartAddProject}/>;
  }


  return (
    
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebar 
      onStartaddproject={handleStartAddProject} 
      Projects={projectstate.projects} 
      onSelectproject={handleSelectedProject} 
      selectprojectId={projectstate.selectedprojectID}
      />
      {content}
    </main>
    
  );
}

export default App;
