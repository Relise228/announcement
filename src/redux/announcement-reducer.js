const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';
const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';

const GET_ANNOUNCEMENT = 'GET_ANNOUNCEMENT';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

let initialState = {
  announcements: [
    {
      id: 1,
      title: 'Jacob Blake: Two shot dead in third night of Wisconsin unrest',
      description:
        'Jacob Blake, 29, was shot and injured by police as he leaned into his car on Sunday, with his children screaming.',
      dateAdded: new Date(),
    },
    {
      id: 2,
      title:
        'Christchurch shooting: Grief and defiance as victims confront gunman',
      description: '',
      dateAdded: new Date(),
    },
    {
      id: 3,
      title: 'Eigg beach runner stumbles on dinosaur bone',
      description: '',
      dateAdded: new Date(),
    },
    {
      id: 4,
      title: 'First announcement',
      description: '',
      dateAdded: new Date(),
    },
    {
      id: 5,
      title: 'First announcement',
      description: '',
      dateAdded: new Date(),
    },
    {
      id: 6,
      title: 'First announcement',
      description: '',
      dateAdded: new Date(),
    },
    {
      id: 7,
      title: 'First announcement',
      description: '',
      dateAdded: new Date(),
    },
    {
      id: 8,
      title: 'First announcement',
      description: '',
      dateAdded: new Date(),
    },
  ],
  searchAnnouncenents: [],

  selectedAnnouncement: [],
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
export default announcementReducer;
