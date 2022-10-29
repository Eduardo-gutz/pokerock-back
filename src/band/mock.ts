import { BandDTO } from './dto/band.dto';

export const mockband: BandDTO = {
  name: 'Slipknot',
  summary:
    'Slipknot is an American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray. After several lineup changes in its early years, the band settled on nine members for more than a decade: Crahan, Jordison, Gray, Craig Jones, Mick Thomson, Corey Taylor, Sid Wilson, Chris Fehn, and Jim Root. Gray died on May 24, 2010, and was replaced during 2011–2014 by guitarist Donnie Steele. Jordison was dismissed from the band on December 12, 2013. Steele left during the recording sessions for .5: The Gray Chapter. The band found replacements in Alessandro Venturella on bass and Jay Weinberg on drums. After the departure of Jordison, as of December 2013 the only founding member in the current lineup is percussionist Crahan. Fehn was also dismissed from the band in March 2019 prior to the writing of We Are Not Your Kind and was replaced by Michael Pfaff.',
  origin: 'Des Moines, Iowa, U.S.',
  startTemp: 1995,
  endTemp: 0,
  toPresent: true,
  discography: [
    {
      name: 'Slipknot',
      relase: '1999-06-29',
      recorder: 'September 29 - November 11, 1998 February 1999',
      studio: 'Indigo Ranch Studios',
      producer: 'Ross Robinson',
      label: 'Roadrunner',
      length: 5160000,
      genders: {
        name: 'Nu Metal',
        bref: 'Nu metal (sometimes stylized as nü-metal) is a subgenre of alternative metal that combines elements of heavy metal music with elements of other music genres such as hip hop, alternative rock, funk, industrial, and grunge. Nu metal bands have drawn elements and influences from a variety of musical styles, including multiple genres of heavy metal. Nu metal rarely features guitar solos or other displays of technical competence; the genre is heavily syncopated and based on guitar riffs. Many nu metal guitarists use seven-string guitars that are down-tuned to produce a heavier sound. DJs are occasionally featured in nu metal to provide instrumentation such as sampling, turntable scratching and electronic backgrounds. Vocal styles in nu metal include singing, rapping, screaming and growling. Nu metal is one of the key genres of the new wave of American heavy metal.',
      },
      track_list: [
        {
          version: 'Original release',
          songs: [
            {
              number: 1,
              name: '742617000027',
              writers: [],
              length: 360,
            },
          ],
        },
      ],
      bref: "Slipknot is the debut studio album by American heavy metal band Slipknot. It was released on June 29, 1999 by Roadrunner Records, following a demo containing a few of the songs which had previously been released in 1998.[4] Later, it was reissued in December 1999 with a slightly-altered track listing and mastering as the result of a lawsuit. It was the first release by the band to be produced by Ross Robinson, who sought to refine Slipknot's sound rather than alter the group's musical direction. This is the only album to feature original guitarist Josh Brainard who left at the end of recording in late 1998 while the band was taking a brief break. Jim Root, who recorded two tracks at this point, would appear full time on subsequent albums.",
    },
  ],
};
