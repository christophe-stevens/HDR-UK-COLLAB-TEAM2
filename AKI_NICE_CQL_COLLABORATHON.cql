library CQL_AKI_HDRUK_TEAM2 version '1'  
using FHIR version '4.0.0'     
include "FHIRHelpers" version '4.0.0' called FHIRHelpers
codesystem "SNOMED": 'http://snomed.info/sct'	  // terminology/codesystem 
code "Risk of acute kidney injury": '938911000000100' from "SNOMED" display 'Acute Kidney Injury'
code "Acute kidney injury warning stage (observable entity)": '1007921000000107' from SNOMED display 'Acute kidney injury warning'
code "serum creatinine": '113075003' from  "SNOMED" display 'serum creatinine'
code "urine output": '364202003' from "SNOMED" display 'urine output'
code "eGFR": '857971000000104' from "SNOMED" display 'eGFR'

parameter "Measurement Period" default Interval[@2020-12-02, @2020-12-20)
parameter "Measurement Period all" default Interval[@1900-01-01, @2020-12-20)
  
context Patient
  
define "isAdult":
	AgeInYears() >= 18
define "isChild":
	AgeInYears() <18    
      
define "observations":
       [Observation]O 
         where  O.effective after start of "Measurement Period all"
         
define "observationsWithin7Days":
       ([Observation]O 
         where  O.effective after start of "Measurement Period")

define "serum creatinine observations":  // can be further converted
       [Observation: "observationsWithin7Days"]O 
         where O.code ~ "serum creatinine"
         
define "urine output observations":
       [Observation: "observationsWithin7Days"]O 
         where O.code ~ "urine output"  
         
define "eGFR observations":
      [Observation: "observationsWithin7Days"]O 
         where O.code ~ "eGFR"
         
define "difference in creatinine":
        Max("serum creatinine observations".value.value.value ) - Min("serum creatinine observations".value.value.value ) //+need to handle units

define "change in creatinine":
        Last("serum creatinine observations".value.value.value) / First("serum creatinine observations".value.value.value)

define "difference in urine output":
        Max("urine output observations".value.value.value) - Min("urine output observations".value.value.value) //+need to handle units

define "change in eGFR":
        Last("eGFR observations".value.value.value) - First("eGFR observations".value.value.value)

// to simplify calculation we decided to take the difference between
// maximum  and minimum observations over last 7 days
// to be accurate A) conversion of units should be managed -i.e. converted to 
define "criteria1":
        "difference in creatinine" >= 26 //need to handle and convert to micromol/L   
          
// to simplify calculation we decided to take the proportion of
// maximum  over  minimum observation over last 7 days
// to be accurate
define "criteria2":
        "change in creatinine" >= 1.5   //unit are irrelevant as long as min and max have same unit(50% percent increase)     
             
// to simplify caluclaution we decided to take the proportion of
// maximum  over  minimum observation over last 7 days
// to be accurate          
define "criteria4":
               "change in eGFR" <= 0.75 //unit are irrelevant as long as min and max have same unit (50% percent increase)  

// Check wehther patient had any of the 3 criteria (1, 2 and 4) 
// the criteria states that 
define "hasNonCodedAKIOverLast7Days":
         AnyTrue({ "criteria1", "criteria2", "criteria4"})
          
define "everHadCodedAKI":
	exists([Condition]C
             with [Encounter] E
                 such that ( C.code ~ "Risk of acute kidney injury" or 
                   C.code ~ "Acute kidney injury warning stage (observable entity)")
        	         and E.period during "Measurement Period all") 
                   
define "hasAKI":
        everHadCodedAKI or hasNonCodedAKIOverLast7Days
                   

 