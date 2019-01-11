declare module 'nekolife.js' {
    export class Client {
        
        public constructor(key: string);

        public pat(): Promise<object>;
        public hug(): Promise<object>;
        public kiss(): Promise<object>;
        public neko(): Promise<object>;
        public why(): Promise<object>;
        public LewdNeko(): Promise<object>;
        public lizard(): Promise<object>;

        public slap(): Promise<object>;
        public poke(): Promise<object>;
        public cuddle(): Promise<object>;
        public tickle(): Promise<object>;
        public EightBall(): Promise<object>;
        public femdom(): Promise<object>;
        public classic(): Promise<object>;

        public ngif(): Promise<object>;
        public EroFeet(): Promise<object>;
        public meow(): Promise<object>;
        public FoxGirl(): Promise<object>;
        public feed(): Promise<object>;
        public CatText(): Promise<object>;
        public OwOify(): Promise<object>;

        public Kemonomimi(): Promise<object>;
        public holo(): Promise<object>;
        public baka(): Promise<object>;
        public woof(): Promise<object>;
        public smug(): Promise<object>;
        public RandomHentaiGif(): Promise<object>;
        public pussy(): Promise<object>;

        public lesbian(): Promise<object>;
        public CumSlut(): Promise<object>;
        public boobs(): Promise<object>;
        public anal(): Promise<object>;
        public NsfwAvatar(): Promise<object>;
        public yuri(): Promise<object>;
        public trap(): Promise<object>;

        public tits(): Promise<object>;
        public GirlSoloGif(): Promise<object>;
        public GirlSolo(): Promise<object>;
        public SmallBoobs(): Promise<object>;
        public PussWankGif(): Promise<object>;
        public PussyArt(): Promise<object>;
        public LewdKemonomimi(): Promise<object>;

        public kitsune(): Promise<object>;
        public keta(): Promise<object>;
        public HoloLewd(): Promise<object>;
        public HoloEro(): Promise<object>;
        public hentai(): Promise<object>;
        public funtanari(): Promise<object>;
        public FeetGif(): Promise<object>;

        public feet(): Promise<object>;
        public ero(): Promise<object>;
        public EroKitsune(): Promise<object>;
        public EroNeko(): Promise<object>;
        public EroYuri(): Promise<object>;
        public CumArts(): Promise<object>;
        public blowjob(): Promise<object>;

        /*public kitsune(): Promise<object>;
        public keta(): Promise<object>;
        public HoloLewd(): Promise<object>;
        public HoloEro(): Promise<object>;
        public hentai(): Promise<object>;
        public funtanari(): Promise<object>;
        public FeetGif(): Promise<object>;*/

        private _get(endpoint: string): Promise<object>;
    }

    export const version: string;
}
