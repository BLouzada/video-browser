import React from 'react';
import { shallow } from 'enzyme';
import VideoDetail from "../video_detail";

test('Should render loading if no video', () => {
  const videoDetail = shallow(<VideoDetail />);
  expect(videoDetail.find('div').get(0).props.children).toEqual('Loading...');
});
test('Should render video iframe', () => {
  const mockVideo = {
    snippet: {
      title: 'teste'
    },
    id: {
      videoId: 'videoid'
    }
  }
  const videoDetail = shallow(<VideoDetail video={mockVideo} />);
  expect(videoDetail.find('#youtube-video-iframe').get(0).props.src).toEqual('https://www.youtube.com/embed/videoid');
});
test('Should render video title', () => {
  const mockVideo = {
    snippet: {
      title: 'Video Title',
    },
    id: {}
  }
  const videoDetail = shallow(<VideoDetail video={mockVideo} />);
  expect(videoDetail.find('div.details-title').get(0).props.children).toEqual('Video Title');
});
test('Should render video description', () => {
  const mockVideo = {
    snippet: {
      description: 'Video description'
    },
    id: {}
  }
  const videoDetail = shallow(<VideoDetail video={mockVideo} />);
  expect(videoDetail.find('div.details-description').get(0).props.children).toEqual('Video description');
});