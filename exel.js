const fs = require('fs');
const ExcelJS = require('exceljs');
const trans = require('cyrillic-to-translit-js');

// Path to the folder with images
const pathToImages = 'images';

// Create a new instance of the Excel workbook
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Images');

// Function to generate a random name, middle name and surname
function generateRandomName() {
    const names = ['Alex', 'Alice', 'Chris', 'Jordan', 'Olivia', 'Taylor', 'Sophia', 'Sam', 'Madison'];
    const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Garcia', 'Rodriguez', 'Wilson'];
    const middleNames = ['Andrew', 'Anne', 'Benjamin', 'Carol', 'Daniel', 'Frank', 'Grace', 'Harry', 'Irene'];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomMiddleName = middleNames[Math.floor(Math.random() * middleNames.length)];

    return `${randomName} ${randomMiddleName} ${randomSurname}`;
}

// Function to generate a random phone number
function generateRandomPhoneNumber() {
    const prefix = '+1';
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 digits
    return prefix + randomNumber;
}

// Function to generate a random email address
function generateRandomEmail() {
    const domains = ['mail.ru','gmail.com','pokemon.ru','pikachu.com','beedrill.som','spewpa.plow','walerra.yazdes'];
    const randomName = generateRandomName().replace(/\s+/g, '').toLowerCase();
    const transName = trans().transform(randomName, "_");
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomChars = 'abcdefghijklmnopqrstuvwxyz123456789'; // available characters
    let additionalChars = '';
    for (let i = 0; i < 5; i++) {
        additionalChars += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return `${transName}${additionalChars}@${randomDomain}`;
}

// Function to generate a random passport number
function generateRandomPassportNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 digits
    return randomNumber;
}

// Function to generate a random birthdate
function generateRandomBirthdate() {
    const start = new Date(1950, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random gender
function generateRandomGender() {
    const genders = ['Male', 'Female'];
    return genders[Math.floor(Math.random() * genders.length)];
}

// Function to generate a random address
function generateRandomAddress() {
    const streets = ['Main St', 'Elm St', 'Pine St', 'Oak St', 'Maple St'];
    const buildings = Math.floor(1 + Math.random() * 100).toString();
    const apartments = Math.floor(1 + Math.random() * 500).toString();
    return streets[Math.floor(Math.random() * streets.length)] + ', bldg.' + buildings + ', apt.' + apartments;
}

// Function to generate a random medical card number
function generateRandomMedCardNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 digits
    return randomNumber;
}

// Function to generate a random medical card issue date
function generateRandomMedCardIssueDate() {
    const start = new Date(2010, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random last visit date
function generateRandomLastVisitDate() {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random next visit date
function generateRandomNextVisitDate() {
    const start = new Date();
    const end = new Date(start.getFullYear() + 1, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random insurance policy number
function generateRandomInsurancePolicyNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 digits
    return randomNumber;
}

// Function to generate a random insurance policy expiration date
function generateRandomInsurancePolicyExpirationDate() {
    const start = new Date();
    const end = new Date(start.getFullYear() + 1, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random diagnosis
function generateRandomDiagnosis() {
    const diagnoses = ['hypertension', 'diabetes', 'bronchitis', 'gastritis', 'arthritis'];
    return diagnoses[Math.floor(Math.random() * diagnoses.length)];
}

// Function to generate a random medical event date
function generateRandomMedicalEventDate() {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random medical event type
function generateRandomMedicalEventType() {
    const types = ['lab test', 'instrumental diagnostics', 'medication therapy', 'physiotherapy', 'surgical treatment'];
    return types[Math.floor(Math.random() * types.length)];
}

// Function to generate a random medical event result
function generateRandomMedicalEventResult() {
    const results = ['positive', 'negative', 'normal', 'abnormal', 'inconclusive'];
    return results[Math.floor(Math.random() * results.length)];
}

// Function to generate a random treatment recommendations
function generateRandomTreatmentRecommendations() {
    const recommendations = ['follow-up visit in 1 month', 'take medication as prescribed', 'change in medication', 'further testing required', 'referral to specialist'];
    return recommendations[Math.floor(Math.random() * recommendations.length)];
}

// Function to generate a random workplace
function generateRandomWorkplace() {
    const workplaces = ['office', 'factory', 'hospital', 'school', 'restaurant'];
    return workplaces[Math.floor(Math.random() * workplaces.length)];
}

// Function to generate a random insurance policy
function generateRandomInsurancePolicy() {
    const number = generateRandomInsurancePolicyNumber();
    const expirationDate = generateRandomInsurancePolicyExpirationDate();
    return `${number}, ${expirationDate}`;
}

// Function to generate a random insurance company
function generateRandomInsuranceCompany() {
    const companies = ['Rosgosstrakh', 'AlfaInsurance', 'Ingosstrakh', 'Reso-Guarantee', 'Sogaz'];
    return companies[Math.floor(Math.random() * companies.length)];
}

// Function to generate a random hospitalization code
function generateRandomHospitalizationCode() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 digits
    return randomNumber;
}

// Function to generate a random hospitalization purpose
function generateRandomHospitalizationPurpose() {
    const purposes = ['emergency hospitalization', 'scheduled operation', 'observation', 'rehabilitation', 'diagnostic examination'];
    return purposes[Math.floor(Math.random() * purposes.length)];
}

// Function to generate a random hospitalization department
function generateRandomHospitalizationDepartment() {
    const departments = ['cardiology', 'orthopedics', 'neurology', 'oncology', 'pediatrics'];
    return departments[Math.floor(Math.random() * departments.length)];
}

// Function to generate a random hospitalization conditions
function generateRandomHospitalizationConditions() {
    const conditions = ['budget', 'paid'];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

// Function to generate a random hospitalization duration
function generateRandomHospitalizationDuration() {
    const duration = Math.floor(1 + Math.random() * 30).toString(); // up to 30 days
    return duration;
}

// Function to generate a random anamnesis
function generateRandomAnamnesis() {
    const anamneses = ['allergies: none', 'chronic diseases: none', 'previous surgeries: none', 'family history: none', 'smoking: no'];
    return anamneses[Math.floor(Math.random() * anamneses.length)];
}

// Function to generate a random symptoms
function generateRandomSymptoms() {
    const symptoms = ['headache', 'fever', 'cough', 'pain', 'nausea'];
    return symptoms[Math.floor(Math.random() * symptoms.length)];
}

// Function to generate a random treatment recommendations
function generateRandomTreatmentRecommendations() {
    const recommendations = ['follow-up visit in 1 month', 'take medication as prescribed', 'change in medication', 'further testing required', 'referral to specialist'];
    return recommendations[Math.floor(Math.random() * recommendations.length)];
}

// Function to generate a random procedures
function generateRandomProcedures() {
    const procedures = ['blood test', 'urine test', 'x-ray', 'MRI', 'ultrasound'];
    return procedures[Math.floor(Math.random() * procedures.length)];
}

// Function to generate a random patient reception date
function generateRandomPatientReceptionDate() {
    const date = new Date();
    return date.toISOString().split('T')[0] + ' ' + date.toTimeString().split(' ')[0]; // with time
}

// Function to generate a random medications
function generateRandomMedications() {
    const medications = ['paracetamol', 'ibuprofen', 'amoxicillin', 'heroin', 'aspirin'];
    return medications[Math.floor(Math.random() * medications.length)];
}

// Function to generate a random medication expiration date
function generateRandomMedicationExpirationDate() {
    const start = new Date();
    const end = new Date(start.getFullYear() + 2, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Function to generate a random medication quantity
function generateRandomMedicationQuantity() {
    const quantity = Math.floor(1 + Math.random() * 100).toString();
    return quantity;
}

// Function to generate a random supplier
function generateRandomSupplier() {
    const suppliers = ['SuperMed', 'AlfaMed', 'DiskoDedMed', 'AlkoMed', 'SuppleMed'];
    return suppliers[Math.floor(Math.random() * suppliers.length)];
}

// Get the list of files in the folder
fs.readdir(pathToImages, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Write the file names, name, phone number and email to the document
    files.forEach((file, index) => {
        const filename = file.split('.').slice(0, -1).join('.'); // Extract name without extension
        const randomName = generateRandomName();
        const randomPhoneNumber = generateRandomPhoneNumber();
        const randomEmail = generateRandomEmail();
        const randomPassportNumber = generateRandomPassportNumber();
        const randomBirthdate = generateRandomBirthdate();
        const randomGender = generateRandomGender();
        const randomAddress = generateRandomAddress();
        const randomMedCardNumber = generateRandomMedCardNumber();
        const randomMedCardIssueDate = generateRandomMedCardIssueDate();
        const randomLastVisitDate = generateRandomLastVisitDate();
        const randomNextVisitDate = generateRandomNextVisitDate();
        const randomInsurancePolicyNumber = generateRandomInsurancePolicyNumber();
        const randomInsurancePolicyExpirationDate = generateRandomInsurancePolicyExpirationDate();
        const randomDiagnosis = generateRandomDiagnosis();
        const randomMedicalEventDate = generateRandomMedicalEventDate();
        const randomMedicalEventType = generateRandomMedicalEventType();
        const randomMedicalEventResult = generateRandomMedicalEventResult();
        const randomTreatmentRecommendations = generateRandomTreatmentRecommendations();
        const randomWorkplace = generateRandomWorkplace();
        const randomInsurancePolicy = generateRandomInsurancePolicy();
        const randomInsuranceCompany = generateRandomInsuranceCompany();
        const randomHospitalizationCode = generateRandomHospitalizationCode();
        const randomHospitalizationPurpose = generateRandomHospitalizationPurpose();
        const randomHospitalizationDepartment = generateRandomHospitalizationDepartment();
        const randomHospitalizationConditions = generateRandomHospitalizationConditions();
        const randomHospitalizationDuration = generateRandomHospitalizationDuration();
        const randomAnamnesis = generateRandomAnamnesis();
        const randomSymptoms = generateRandomSymptoms();
        const randomTreatmentRecommendations2 = generateRandomTreatmentRecommendations();
        const randomProcedures = generateRandomProcedures();
        const randomPatientReceptionDate = generateRandomPatientReceptionDate();
        const randomMedications = generateRandomMedications();
        const randomMedicationExpirationDate = generateRandomMedicationExpirationDate();
        const randomMedicationQuantity = generateRandomMedicationQuantity();
        const randomSupplier = generateRandomSupplier();

        sheet.addRow([
            filename + '.png',
            randomName,
            randomPhoneNumber,
            randomEmail,
            randomPassportNumber,
            randomBirthdate,
            randomGender,
            randomAddress,
            randomMedCardNumber,
            randomMedCardIssueDate,
            randomLastVisitDate,
            randomNextVisitDate,
            randomInsurancePolicyNumber,
            randomInsurancePolicyExpirationDate,
            randomDiagnosis,
            randomMedicalEventDate,
            randomMedicalEventType,
            randomMedicalEventResult,
            randomTreatmentRecommendations,
            randomWorkplace,
            randomInsurancePolicy,
            randomInsuranceCompany,
            randomHospitalizationCode,
            randomHospitalizationPurpose,
            randomHospitalizationDepartment,
            randomHospitalizationConditions,
            randomHospitalizationDuration,
            randomAnamnesis,
            randomSymptoms,
            randomTreatmentRecommendations2,
            randomProcedures,
            randomPatientReceptionDate,
            randomMedications,
            randomMedicationExpirationDate,
            randomMedicationQuantity,
            randomSupplier
        ]);
    });

    // Save the document
    workbook.xlsx.writeFile('data.xlsx')
        .then(() => {
            console.log('Excel document successfully created.');
        })
        .catch((error) => {
            console.error('Error saving Excel document:', error);
        });
});
