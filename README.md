## HDR UK COLLABORATHON TEAM 2 

My amazing team attempted to create a knowledge object to find patients with acute kidney injury(AKI) according to the NICE guideline.  
https://www.nice.org.uk/guidance/ng148/chapter/Recommendations#detecting-acute-kidney-injury 

I made a video to demonstrate the use of the code in this repository https://youtu.be/K9HBerhd4bU

The challenge had different possible components (some of which couldn't be delivered on the day):  
1. Add simulated patients, encounters, conditions and observations' json objects and upload them in a HAPI FHIR server. These patients must have a coded AKI (using snomed codes) or lab measurements predicting AKI based on NICE clinical recommendations.  
2. Create a knowledge CQL object to retrieve patients with coded AKI or lab measurement predicting AKI. 
3. Run the CQL at https://cql-runner.dataphoria.org/ pointing to the HAPI FHIR server containing the syntethic patients created in step 1
4. Upload the CQL as a knowledge object within the HAPI FHIR server. 
5. Give a presentation on the process, challenge of implementation in clinical practice and technical difficulties. 

#### The 5 files/ directory in this repository are  
+ FHIR_TEST_PATIENTS_ENCOUNTERS_OBSERVATION.JSON - The set of synthetic patients/encounters/observation/conditions. 
+ AKI_NICE_CQL_COLLABORATHON.cql - The functional although not  yet optimal CQL query; 
+ ImageOfExecutedQueryAndOutput.png - An image showing the output of the query
+ Presentation_AKI_HDRUK_TEAM2.pptx - Contains the draft presentation made on the day. 
+ AngularApplication - Contains the application to automatically apply knwoledge objects stored on the fhir server to patient stored on the same server(not yet working - see below).

### DEVELOPMENT POSTERIOR TO THE EVENT
After the event I created an angular 9 Application to
1. upload/edit/delete patient 
2. upload/edit/delete library containing base64 ELM representation  of a knowledge object - using CQL-TO-ELM Java Application https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md
3. The application aim is to automatically applies (or run) one of knowledge object stored as a library on the FHIR server using javascript libraries (i.e. cql-exec-fhir, cql-execution)   
IT IS 99% WORKING BUT STILL WITH SOME BUGS AND NOT OPTIMALLY