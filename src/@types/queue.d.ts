export interface QueueInterface {
    tracks: string[];
    broadcast(chunk: Buffer): void;
    addClient(): {
        id: string;
        client: PassThrough;
    };
    removeClient(id: string): void;
    loadTracks(dir: string): Promise<void>;
    getTrackBitrate(filepath: string): Promise<number>;
    getNextTrack(): {
        filepath: string;
        bitrate: number;
    };
    pause(): void;
    resume(): void;
    started(): boolean;
    play(useNewTrack?: boolean): void;
    loadTrackStream(): void;
    start(): Promise<void>;
}