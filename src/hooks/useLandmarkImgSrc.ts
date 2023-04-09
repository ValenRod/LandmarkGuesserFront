import {Dispatch, SetStateAction, useEffect, useState} from 'react';

interface Props {
  url: string;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const useLandmarkImgSrc = (props: Props) => {
  const [landmarkImgSrc, setLandmarkImgSrc] = useState<string | null>(null);
  const {url, setFetchErrorState} = props;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const decodedPixabayData = data.hits[0].webformatURL;
        setLandmarkImgSrc(decodedPixabayData);
      } catch (e) {
        setFetchErrorState(true);
      }
    })();
  }, []);

  return {landmarkImgSrc};
};
