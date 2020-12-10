## HDR UK COLLABORATHON TEAM 2 

My amazing team attempted to create a knwoledge object to find patients with acute kideny injury(AKI) according to NICE guideline.  
https://www.nice.org.uk/guidance/ng148/chapter/Recommendations#detecting-acute-kidney-injury 

The challenge had different possible components (some of which couldn't be delivered on the day):  
1. Add simulated patients, encounter, condition and observation json object and upload them in a HAPI FHIR server. These patients must have coded AKI (using snomed codes) or lab measurements predicting AKI based on NICE clinical recommendations.  
2. Create a knwoledge CQL object to retrieve the patient with coded AKI or ab measurement predicting AKI. 
3. Run the CQL at https://cql-runner.dataphoria.org/ pointing to the HAPI FHIR server syntethic patients created in point A.
4. Upload the CQL as a knwoledge object within the HAPI FHIR. 
5. Give a presentation on process, challenge to implement in clinical practice and technical difficulties. 

#### The two files in this repository are  
+ FHIR_TEST_PATIENTS_ENCOUNTERS_OBSERVATION.JSON - The set of synthetic patients/encounters/observation/conditions. 
+ AKI_NICE_CQL_COLLABORATHON.cql - The functional although not  yet optimal CQL query; 
+ ImageOfExecutedQueryAndOutput.png - An image showing the output of the query
+ DraftPresentation_AKI_HDRUK_TEAM2.pptx - Contains the draft presentation made on the day. 
+ AngularApplication - Contains the application to automatically run stored knwoledge oibjects from fhir server (not yet working)

### DEVELOPMENT POSTERIOR TO THE EVENT
After the event I created an angular 9 Application to
1. upload/edit/delete patient 
2. upload/edit/delete library containing base64 ELM representation  of a knowledge object - using CQL-TO-ELM Java Application https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md
3. The application aim is to automatically applies (or run) one of knwoeldge object stored as a library on the FHIR server using javascript libraries (i.e. cql-exec-fhir, cql-execution)   

IT IS NOT YET WORKING BUT I AM NEARLY THERE (TIME ALLOWS)   
The rationale would be to automatically save "ready to run" knwoledge artifacts.