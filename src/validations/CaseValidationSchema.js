import * as Yup from 'yup';
import caseFormModel from './caseFormModel';
const {
    formField: {
        advocateClientId,
        advocateName,
        clientPosition,
        partyName,
        partyAdvocateName,
        cnr,
        caseNumber,
        caseTypeId,
        priority,
        underSection,
        underAct,
        filingNumber,
        filingDate,
        registrationNumber,
        registrationDate,
        firstHearingDate,
        firstHearingTime,
        firPoliceStation,
        firNumber,
        firDate,
        stateId,
        cityId,
        courtTypeId,
        courtId,
        judgeTypeId,
        judgeId
    }
} = caseFormModel;

const CaseValidationSchema = [
    Yup.object().shape({
        keyword: Yup.string(),
        attractionId: Yup.string(),
        venueId: Yup.string(),
        postalCode: Yup.string(),
        latlong: Yup.string(),
        radius: Yup.string(),
        unit: Yup.string().oneOf(["miles", "km"]).default("miles"),
        source: Yup.string().oneOf(["ticketmaster", "universe", "frontgate", "tmr"]),
        locale: Yup.string(),
        marketId: Yup.string(),
        startDateTime: Yup.string(),
        endDateTime: Yup.string(),
        includeTBA: Yup.string().oneOf(["yes", "no", "only"]),
        includeTBD: Yup.string().oneOf(["yes", "no", "only"]),
        includeTest: Yup.string().oneOf(["yes", "no", "only"]),
        size: Yup.string(),
        page: Yup.string(),
        sort: Yup.string().oneOf(['name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc', 'distance,date,asc', 'onSaleStartDate,asc', 'id,asc', 'venueName,asc', 'venueName,desc', 'random']).default('relevance,desc'),
        onsaleStartDateTime: Yup.string(),
        onsaleEndDateTime: Yup.string(),
        city: Yup.string(),
        countryCode: Yup.string(),
   
    }),
  
];

export default CaseValidationSchema;