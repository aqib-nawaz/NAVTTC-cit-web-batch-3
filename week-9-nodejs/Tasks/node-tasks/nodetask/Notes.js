const fs = require("fs");

class Notes {

    readFile(){
        const data = fs.readFileSync("./data.json", "utf-8")
        return JSON.parse(data);
    }

    searchRecord(id) {
        const record = this.readFile();
        return record.filter((n) => n.id == id);
    }

    deleteFile(id){
        const record = this.readFile();
        const content = record.filter((n) => n.id != id);
        
        fs.writeFile("./data.json", JSON.stringify(content), err => {
            if(err)throw err; 
            console.log(`Record deleted Successfully!!`)
        })


    }

    updateRecord(id, newProdName){
        const pId = id;
        const targetItem = this.searchRecord(pId);
        targetItem[0].name = newProdName;
        
        const otherItems = this.readFile().filter((n) => n.id !== pId);
        const finalList = otherItems.concat(targetItem);
        
        fs.writeFile("./data.json", JSON.stringify(finalList), err => {
            if(err)throw err;
            console.log("item Updated Successfully");
        })
    }




    insert(id, category){
        const completeFile = this.readFile();
        completeFile.push({
            "id": id,
            "name" : category
        })

        fs.writeFile("./data.json", JSON.stringify(completeFile), (err) => {
            if(err) throw err;
            console.log("Item Added Successfully");
        });
    }




}

module.exports = Notes;