import TrackJoinerView from './src/views/TrackJoinerView.vue'
import {
    addTimestampToDateObject,
    ansiXOR,
    arrayBufferToWordArray,
    changePartOfTrackType,
    changeTrackType,
    createDB,
    cutOverlapping,
    fileTypes,
    Fix,
    fixErroneousDT,
    getDBFirstGliderType,
    getDBFixesRowsAsPromise,
    getDBTrackDTEndAsPromise,
    getDBTrackDTStartAsPromise,
    getDBTracksRowsAsPromise,
    getDBTrackTypeAsPromise,
    getFileExtension,
    getFileName,
    getOverlappedRowsID,
    getStravaGpxTypeFromTrackType,
    getTrackASGpxString,
    getTrackASIgcString,
    gpxProducer,
    igcAltitudeFormater,
    igcBRecordFormater,
    igcDate2ISO8601,
    igcDateFormater,
    igcHeaders,
    igcLatFormater,
    igcLonFormater,
    igcProducer,
    igcTimeFormater,
    igcTypeCommentFormater,
    initDB,
    insertFITTrackInDB,
    insertFITTrackInDBAsPromise,
    insertFixesArrayInDB,
    insertGPXTrackInDB,
    insertGPXTrackInDBAsPromise,
    insertIGCTrackInDB,
    insertIGCTrackInDBAsPromise,
    integrateInPreviousTrack,
    isAnOverlapDetected,
    myTrackjoinerDB,
    nanoDB_name,
    openFITFile,
    openFITFileTreatSingle,
    openFile,
    openFileAsPromise,
    openFileTreatSingle,
    openFileTreatSingleAsPromise,
    openGPXFile,
    openGPXFileTreatSingle,
    openIGCFile,
    openIGCFileTreatSingle,
    removeOrphanedTracksAsPromise,
    showDB,
    splitTrackIn2,
    splitTrackIn3,
    trackTypes,
    TrackjoinerDB,
  } from './src/trackjoiner/trackjoiner'

export {
    addTimestampToDateObject,
    ansiXOR,
    arrayBufferToWordArray,
    changePartOfTrackType,
    changeTrackType,
    createDB,
    cutOverlapping,
    fileTypes,
    Fix,
    fixErroneousDT,
    getDBFirstGliderType,
    getDBFixesRowsAsPromise,
    getDBTrackDTEndAsPromise,
    getDBTrackDTStartAsPromise,
    getDBTracksRowsAsPromise,
    getDBTrackTypeAsPromise,
    getFileExtension,
    getFileName,
    getOverlappedRowsID,
    getStravaGpxTypeFromTrackType,
    getTrackASGpxString,
    getTrackASIgcString,
    gpxProducer,
    igcAltitudeFormater,
    igcBRecordFormater,
    igcDate2ISO8601,
    igcDateFormater,
    igcHeaders,
    igcLatFormater,
    igcLonFormater,
    igcProducer,
    igcTimeFormater,
    igcTypeCommentFormater,
    initDB,
    insertFITTrackInDB,
    insertFITTrackInDBAsPromise,
    insertFixesArrayInDB,
    insertGPXTrackInDB,
    insertGPXTrackInDBAsPromise,
    insertIGCTrackInDB,
    insertIGCTrackInDBAsPromise,
    integrateInPreviousTrack,
    isAnOverlapDetected,
    myTrackjoinerDB,
    nanoDB_name,
    openFITFile,
    openFITFileTreatSingle,
    openFile,
    openFileAsPromise,
    openFileTreatSingle,
    openFileTreatSingleAsPromise,
    openGPXFile,
    openGPXFileTreatSingle,
    openIGCFile,
    openIGCFileTreatSingle,
    removeOrphanedTracksAsPromise,
    showDB,
    splitTrackIn2,
    splitTrackIn3,
    trackTypes,
    TrackjoinerDB,
    TrackJoinerView,
  }