#!/bin/sh

gst-launch-1.0 filesrc location=video.mp4 ! qtdemux name=demux \
    oggmux name=mux ! tcpserversink host=127.0.0.1 port=9090 \
    demux.video_0 ! queue ! decodebin ! videoconvert ! videoscale ! 'video/x-raw, width=640, height=480' ! videobalance saturation=0.0 ! theoraenc ! mux. \
    demux.audio_0 ! queue ! decodebin ! audioconvert ! audioresample ! vorbisenc ! mux.