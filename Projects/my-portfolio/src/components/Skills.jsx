const skillsData = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "HTML/CSS", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Express", level: 70 },
    { name: "Git/GitHub", level: 85 },
  ];
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-blue-500 pb-2">
          Skills
        </h2>
  
        <div className="max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
  
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: `${skill.level}%` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  