function addRecord(newRecord, oldRecord) {
  if (!oldRecord) return newRecord;
  // actual calculation
  ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim'].forEach(account => {
    oldRecord.properties[account].number += newRecord.properties[account].number;
  })
  return oldRecord;
}

export default addRecord;
