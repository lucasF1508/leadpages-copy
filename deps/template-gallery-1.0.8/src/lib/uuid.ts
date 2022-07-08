// This is a pseudo-unique uuid generator. you can safely assume that you will not
//  get duplicates within the context of a single browser session, but this *should not*
//  be used to generate anything that is going to be persisted.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return `${chr4()} + ${chr4()} + '-' + ${chr4()} + '-' + ${chr4()} + '-' + ${chr4()} + '-' + ${chr4()} + ${chr4()} + ${chr4()}`;
}
