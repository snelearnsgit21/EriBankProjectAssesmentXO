# EriBankProjectAssesmentXO
This repo is created for automating a EriBank Mobile app login functionality using Appium, Cucumber BDD, WebDriverIO &amp; JavaScript

**Prerequisites**

**1.Install Required Tools:**
- Node.js and npm (Node Package Manager)
- Appium
- WebDriverIO
- Cucumber
- IDE (e.g., Visual Studio Code)
- Android Studio

**2.Setup Mobile App and Appium Server:**
- Ensure your mobile app is installed on a device or emulator.
- Start the Appium server with the desired capabilities for your app.
- Add below AVDs (Android Virtual Devices) in your Android Studio
  - nightwatch-android-11
  - Small_Phone_API_26
  - Pixel 8 Pro API 27   

**3.Download this github project on your local and unzip the folder**

**4.Open Visual Studio Code Editor on your machine > File > Open Folder > Select this unzipped folder.**

Now the project setup is complete.

**Execute below command on your VSCode terminal to run the test on android emulator**
  -   npx nightwatch .\nightwatch\eribank-android.js --env app.android.emulator
  -   You will be able to view the test results in the VSCode terminal as shown below -
    <img width="912" alt="image" src="https://github.com/snelearnsgit21/EriBankProjectAssesmentXO/assets/83170958/5aa1051d-3336-4ac9-b486-fcc33a92d25e">
  - You will be able to view tests running on an android emulator like [this](https://drive.google.com/drive/u/2/folders/1SGmtd6FzGzQBsWXrZS4OCdzLNFSBRP-z)


https://github.com/snelearnsgit21/EriBankProjectAssesmentXO/assets/83170958/1dbd6d60-7f0c-4e2b-b4ff-08f5e671be1c



Please let me know in case you face any issues running this tests.

Thanks & Regards,
Snehal Vijay Marathe
    


