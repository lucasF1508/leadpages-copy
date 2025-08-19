import { SanityDocument } from "@sanity/client"
import {transferClients} from '@src/client'
const {from} = transferClients

const shapeAssetRefForImport = (data, getNewAsset) => {
  if (Array.isArray(data)) {
    return data.map(item => shapeAssetRefForImport(item, getNewAsset));
  }

  if (typeof data === 'object' && data !== null) {
    if (
      (data._type === 'image' || data._type === 'file') &&
      data.asset &&
      data.asset._ref &&
      data.asset._type === 'reference'
    ) {
      const ref = data.asset._ref;
      const newAssetPath = getNewAsset(ref);

      return {
        _type: data._type,
        _sanityAsset: `${data._type}@${newAssetPath}`,
        ...(data?.lqip ? { lqip: data.lqip } : {}),
      };
    }

    const newObj = {};
    for (const key in data) {
      newObj[key] = shapeAssetRefForImport(data[key], getNewAsset);
    }
    return newObj;
  }

  return data;
}

const mapAssetRef = (docs: SanityDocument[]) => {
  const output = shapeAssetRefForImport(docs, (ref) => {
    const [_type,] = ref.split('-');
    let url

    if (_type === 'image') {
      const [_id, size, extension] = ref.split('-').slice(1);
      const type = _type === 'image' ? 'images' : 'files';
      url = `https://cdn.sanity.io/${type}/${from.config().projectId}/${from.config().dataset}/${_id}-${size}.${extension}`;
    }

    if (_type === 'file') {
      const [_id, extension] = ref.split('-').slice(1);
      const type = _type === 'image' ? 'images' : 'files';
      url = `https://cdn.sanity.io/${type}/${from.config().projectId}/${from.config().dataset}/${_id}.${extension}`;
    }

    return url;
  });

  return output
}

export default mapAssetRef