import { ref, computed, reactive } from "vue";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { string } from "yup";

export const useFetch = (config: AxiosRequestConfig, skip?: boolean) => {
  const data = ref();
  const response = ref<AxiosResponse>();
  const error = ref();
  const loading = ref(false);

  const fetch = async () => {
    loading.value = true;
    try {
      const result = await axios.request({
        ...config,
      });
      response.value = result;
      data.value = result.data;
    } catch (ex) {
      error.value = ex;
    } finally {
      loading.value = false;
    }
  };

  !skip && fetch();

  return { data, response, loading, error, fetch };
};

const cacheMap = reactive(new Map());

export const useFetchCache = (
  key: string,
  config: AxiosRequestConfig,
  skip?: boolean
) => {
  const info = useFetch({ ...config }, skip);

  const update = () => cacheMap.set(key, info.response.value);
  const clear = () => cacheMap.set(key, undefined);

  const fetch = async () => {
    try {
      await info.fetch();
      update();
    } catch {
      clear();
    }
  };

  const response = computed(() => cacheMap.get(key));
  const data = computed(() => response.value?.data);

  if (response.value == null) fetch();

  return { ...info, fetch, data, response, clear };
};
