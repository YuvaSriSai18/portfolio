import React from "react";
import { SkillCategory } from "../../components/Skills/SkillCategory";
import { Skill } from "../../Constants/Skills";
export default function Skills() {
  return (
    <>
      <SkillCategory title="Languages" skills={Skill.Languages} />
      <SkillCategory title="Frameworks" skills={Skill.FrameWorks} />
      <SkillCategory title="Databases" skills={Skill.Databases} />
      <SkillCategory title="Low Code" skills={Skill.LowCodeTools} />
      <SkillCategory title="Tools" skills={Skill.Tools} />
    </>
  );
}
