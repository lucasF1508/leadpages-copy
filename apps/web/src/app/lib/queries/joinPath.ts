
const joinPath = (_segments: string | string[] | undefined) =>{
  const segments = Array.isArray(_segments) ? _segments : [_segments]
  return ['/', segments.filter(Boolean).join('/')].join('')
}

export default joinPath