function skillsMember() {
    return {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "Python", "C++"],
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        getSkills: function() {
            return this.skills;
        },
        getName: function() {
            return this.name;
        },
        getAge: function() {
            return this.age;
        },
        setName: function(name) {
            this.name = name;
        },
        setAge: function(age) {
            this.age = age;
        }
    }
}