import ytdl from 'ytdl-core';
import { Readable } from 'stream';

declare interface downloadOptions extends ytdl.downloadOptions {
  debug?: boolean,
  ffmpegArgs?: Iterable<String>
}

declare function download(link: string, options?: downloadOptions, ffmpegArgs?: Iterable<string>): Promise<Readable>;

declare namespace ytdlDiscord {
  const newDownload: typeof download & typeof ytdl;
}

export = ytdlDiscord.newDownload;