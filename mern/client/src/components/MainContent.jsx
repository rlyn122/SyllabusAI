import "./css/MainContent.modules.css"

const MainContent = ({text,subtext}) => {
    return(

        <div className="main-content">
            <h1 className="sdf">{text}</h1>
            <h2>{subtext}</h2>
            <p>Streamline your academic journey with precision and ease. AI Syllabus Assistant transforms your syllabus into an organized, actionable plan, syncing seamlessly with your calendar and optimizing your study schedule.</p>
        </div>
    )
} 

export default MainContent;