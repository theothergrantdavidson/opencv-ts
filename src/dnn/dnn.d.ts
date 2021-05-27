import { Mat } from '../core/Mat';
import { Scalar } from '../core/Scalar';
import { Size } from '../core/Size';

declare module DNN {
    interface dnn_Net {
        new(): dnn_Net
        /**
         * Sets the new input value for the network
         * @param input input mat
         */
        setInput(input: Mat): void;
        /**
         * Runs forward pass to compute outputs of layers
         */
        forward(): number[];
    }

    interface dnn {
        /**
         *Creates 4-dimensional blob from image. Optionally resizes and crops image from center, subtract mean values, scales values by scalefactor, swap Blue and Red channels
         * @param image input image (with 1-, 3- or 4-channels).
         * @param scalefactor multiplier for image values.
         * @param size spatial size for output image
         * @param mean scalar with mean values which are subtracted from channels. Values are intended to be in (mean-R, mean-G, mean-B) order if image has BGR ordering and swapRB is true
         * @param swapRB flag which indicates that swap first and last channels in 3-channel image is necessary
         */
        blobFromImage(
            image: Mat,
            scalefactor: number,
            size: Size,
            mean: Scalar,
            swapRB: boolean
        ): Mat;
        /**
         * Read deep learning network represented in one of the supported formats
         * @param config Text file contains network configuration. It could be a file with the following extensions:
         *    *.prototxt (Caffe, @see http://caffe.berkeleyvision.org/)
         *    *.pbtxt (TensorFlow, @see https://www.tensorflow.org/)
         *    *.cfg (Darknet, @see https://pjreddie.com/darknet/)
         *    *.xml (DLDT, @see https://software.intel.com/openvino-toolkit)
         * @param model Binary file contains trained weights. The following file extensions are expected for models from different frameworks:
         *    *.prototxt (Caffe, http://caffe.berkeleyvision.org/)
         *    *.pbtxt (TensorFlow, https://www.tensorflow.org/)
         *    *.cfg (Darknet, https://pjreddie.com/darknet/)
         *    *.xml (DLDT, https://software.intel.com/openvino-toolkit)
         */
        readNet(config: string, model: string): dnn_Net;
    }
}
export = DNN;
