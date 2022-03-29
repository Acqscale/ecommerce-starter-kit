import { FunctionComponent } from 'react';

import moment from 'moment';

import { VideoSchemaMarkup } from './types';

type VideoSchemaProps = {
  title: string;
  description: string;
  thumbnailUrls: string[];
  uploadedAtTimestamp: number;
  videoUrl?: string;
  durationInSeconds?: number;
  embedVideoUrl?: string;
};

const VideoSchema: FunctionComponent<VideoSchemaProps> = ({
  title,
  description,
  thumbnailUrls,
  uploadedAtTimestamp,
  videoUrl,
  durationInSeconds,
  embedVideoUrl,
}) => {
  const videoSchema: VideoSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description,
    thumbnailUrl: thumbnailUrls,
    uploadDate: moment.unix(uploadedAtTimestamp).toISOString(),
  };

  if (videoUrl) {
    videoSchema.contentUrl = videoUrl;
  }

  if (durationInSeconds && durationInSeconds > 0) {
    videoSchema.duration = moment
      .duration(durationInSeconds, 'seconds')
      .toISOString();
  }

  if (embedVideoUrl) {
    videoSchema.embedUrl = embedVideoUrl;
  }

  return (
    <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
  );
};

export default VideoSchema;
