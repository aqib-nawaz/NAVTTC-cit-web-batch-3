const obj1 = {
        name: 'Abdus Samad',
        age: 23,
        marks: 30
    }
    
    const obj2 = {
        ...obj1,
        gpa: 3.2,
        semester: 6
    }
    
    const sum = (a,b,c,d,e,f) => {
        console.log(a + b);
    }
    
    
    const values = [10,20,2,3,4,5]
    
    
    sum(values[0],values[1])
    
    const count = (a,b, ...c) => {
        console.log(a + b);
        const s = c.reduce((a,b) => a + b, 0)
        console.log(s)
    }
    
    count(40,50,40,04,3,2,1,3,4)
    
    const myName = "Ali";
    let t = [...myName]
    
    console.log(t)
    