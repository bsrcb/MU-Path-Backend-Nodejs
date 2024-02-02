FROM nikolaik/python-nodejs:python3.8-nodejs16

# RUN apt-get update -y 

# gcc compiler and opencv prerequisites
# RUN apt-get -y install nano git build-essential libglib2.0-0 libsm6 libxext6 libxrender-dev \
#     python3-opencv ca-certificates python3-dev wget sudo ninja-build
    

#upgrade
RUN pip install --upgrade pip



# install tensorboard
# RUN pip install tensorboard

#torch, torchvision
# RUN pip install torch==1.10.1+cpu torchvision==0.11.2+cpu torchaudio==0.10.1 -f https://download.pytorch.org/whl/torch_stable.html && \
#     pip install cython && \
#     pip install 'git+https://github.com/cocodataset/cocoapi.git#subdirectory=PythonAPI' &&\
#     pip install --user 'git+https://github.com/facebookresearch/fvcore'

#detectron2
# RUN python -m pip install detectron2 -f \
#   https://dl.fbaipublicfiles.com/detectron2/wheels/cpu/torch1.10/index.html

#https://dl.fbaipublicfiles.com/detectron2/wheels/cpu/index.html


    
# RUN pip install openmim &&\
#     mim install mmcv-full &&\
#     mim install mmdet &&\
#     git clone https://github.com/open-mmlab/mmocr.git &&\
#     cd mmocr &&\
#     pip install -e .



#created workPlace 
RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

RUN npm install mysql
RUN npm install blob
COPY . /app
RUN npm install
EXPOSE 8123

CMD BUILD_ENV=docker node app.js
