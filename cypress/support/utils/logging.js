export function CustomLog(message,logType){
    switch(logType){
        case "Info":{
            cy.log(`**_ℹ️ [INFO] ${message}_**`);
        }
        break;

        case "Error":{
            cy.log(`**_❌ [ERROR] ${message}_**`);
        }
        break;

        case "Success":{
            cy.log(`**_✅ [SUCCESS] ${message}_**`);
        }
        break;

        default:{
            cy.log(message);
        }
    }
}