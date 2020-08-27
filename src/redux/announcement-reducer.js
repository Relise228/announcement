const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';
const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';

const GET_ANNOUNCEMENT = 'GET_ANNOUNCEMENT';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SIMILIAR = 'SET_SIMILIAR';

let initialState = {
  announcements: [
    {
      id: 1,
      title: 'Photographer seeks male models (Norwich)',
      description:
        'Experienced photographer seeks male models, any age as long as youre in good shape. No fees either way. If youre interested, drop me a line! Cheers',
      dateAdded: new Date(),
    },
    {
      id: 2,
      title: 'Amateur photographer',
      description:
        'amateur photographer who’s always looking for new female to photograph Would you be interested in posing for a photography project. Some nudity, not for publication and you receive a copy of the pictures, work could be fairly regular If interested please reply back with 2 recent full length pictures of yourself, details of age, height and U.K. dress size please, and also body stats and if any body art',
      dateAdded: new Date(),
    },
    {
      id: 3,
      title: 'Web designing & Web development (PHP) service (Mumbai)',
      description:
        'I am a freelancer with 16+ years of experience in Web Industry, based in Mumbai, Maharashtra, India. I have been working as a freelancer for the last six years now (Earlier was on JOB) and have hundreds of satisfied clients from around the world. ',
      dateAdded: new Date(),
    },
    {
      id: 4,
      title: 'DANB Dental Radiology & Coronal Polish * (Gilbert)',
      description:
        'These classes can be taken combined or separately to prepare and equip the students to earn their certifications in the Dental Assisting Radiology and Coronal Polish through the Dental Assisting National Board (DANB) Exams.',
      dateAdded: new Date(),
    },
    {
      id: 5,
      title:
        'Job Fair - Triviciti Health Corp (Facility Crossroads - AZ Ave & Elliot)',
      description:
        'Triviciti Health Corp is a manufacturer of N95 respiratory masks and surgical masks. We are hiring full-time Manufacturing Associates for our new location in Chandler. The facility is at Arizona Ave & Elliot Road.',
      dateAdded: new Date(),
    },
    {
      id: 6,
      title: 'HIRING EVENT (Chandler/Sun Lakes)',
      description:
        'Our upscale active adult community/country club is hosting a hiring event. We are looking for enthusiastic candidates to come join this fun exciting place to work. ',
      dateAdded: new Date(),
    },
    {
      id: 7,
      title: 'Antique & Collectible Show/Sale (Prescott Valley)',
      description:
        'Antique, Vintage and Collectible show/sale sponsored by Thumb Butte Questers and Yavapai Questers 100% of show profits are donated to area historic preservation and restoration projects',
      dateAdded: new Date(),
    },
    {
      id: 8,
      title: 'In Home Caregiver (Phoenix/East Valley)',
      description:
        'Looking to hire in home caregivers to assist with daily activities, meals, companionship, etc. all over the east valley. Contact the main office at show contact info with any questions.',
      dateAdded: new Date(),
    },
  ],
  searchAnnouncenents: [],
  selectedAnnouncement: [],
  similiar: [],
  searchValue: '',
};

const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANNOUNCEMENT:
      return {
        ...state,
        announcements: [
          ...state.announcements,
          {
            id: state.announcements.length + 1,
            title: action.title,
            description: action.description,
            dateAdded: new Date(),
          },
        ],
      };

    case DELETE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: [
          ...state.announcements.filter(
            (announcement) => announcement.id !== action.id
          ),
        ],
      };

    case GET_ANNOUNCEMENT:
      return {
        ...state,
        selectedAnnouncement: state.announcements.filter(
          (announcement) => announcement.id == action.id
        ),
      };
    case SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.searchValue,
        searchAnnouncenents: [
          ...state.announcements.filter((announcement) =>
            announcement.title.toLowerCase().includes(action.searchValue)
          ),
        ],
      };
    }
    case UPDATE_ANNOUNCEMENT: {
      return {
        ...state,
        announcements: state.announcements.map((a) => {
          if (a.id === action.payload.id) {
            return {
              ...a,
              title: action.payload.title,
              description: action.payload.description,
              dateAdded: new Date(),
            };
          }
          return a;
        }),
      };
    }

    case SET_SIMILIAR: {
      const titleWords = state.selectedAnnouncement[0].title
        .toLowerCase()
        .split(' ');
      const descriptionWords = state.selectedAnnouncement[0].description
        .toLowerCase()
        .split(' ');

      return {
        ...state,
        similiar: state.announcements.filter((a) => {
          titleWords.map((element) => {
            console.log(a.title.toLowerCase());
            if (a.title.toLowerCase().includes(element)) return a;
          });
        }),
      };
    }

    default:
      return state;
  }
};

// ACTION CREATORS

export const addAnnouncement = (title, description) => ({
  type: ADD_ANNOUNCEMENT,
  title,
  description,
});

export const deleteAnnouncement = (id) => ({
  type: DELETE_ANNOUNCEMENT,
  id,
});

export const getAnnouncementById = (id) => ({
  type: GET_ANNOUNCEMENT,
  id,
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  searchValue,
});

export const updateAnnouncement = (id, description, title) => ({
  type: UPDATE_ANNOUNCEMENT,
  payload: {id, description, title},
});

export const getSimiliar = () => ({
  type: SET_SIMILIAR,
});
export default announcementReducer;
