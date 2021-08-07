import ytdl from 'ytdl-core';
import { Readable } from 'stream';

declare interface downloadOptions extends ytdl.downloadOptions {
  debug?: boolean,
  ffmpegArgs?: Iterable<String>
}

declare interface extendedReadable extends Readable {
  _destroy: any
}

declare function download(link: string, options?: downloadOptions, ffmpegArgs?: Iterable<string>): Promise<extendedReadable>;

declare namespace ytdlDiscord {
  const newDownload: typeof download & typeof ytdl;
}

export = ytdlDiscord.newDownload;