import ytdl from 'ytdl-core';
import { Readable } from 'stream';

declare function download(link: string, options?: ytdl.downloadOptions, ffmpegArgs?: Iterable<string>): Promise<Readable>;

declare namespace ytdlDiscord {
  const newDownload: typeof download & typeof ytdl;
}

export = ytdlDiscord.newDownload;