package com.example.wbdvsp2101jingyiwangserverjava.services;

import com.example.wbdvsp2101jingyiwangserverjava.models.Widget;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class WidgetService {

  private List<Widget> widgets = new ArrayList<>();
  {
    Widget w1 = new Widget("w1", "ABC123",  (long)123, "HEADING", 1, "Welcome to Widgets!", "", 1, 100, 200, "", "", "");
    Widget w2 = new Widget("w2", "6046c132abf19000172208d2", (long)234, "PARAGRAPH", 2, "This is a paragraph.", "", 1, 100, 200, "", "", "");
    Widget w3 = new Widget("w3", "6046c132abf19000172208d2", (long)345, "HEADING", 3, "Welcome to WebDev!", "", 2, 100, 200, "", "", "");
    Widget w4 = new Widget("w4", "6046c132abf19000172208d2", (long)456, "PARAGRAPH", 4, "Lorem ipsum", "", 1, 100, 200, "", "", "");
    widgets.add(w1);
    widgets.add(w2);
    widgets.add(w3);
    widgets.add(w4);
  }

  public Widget createWidget(String tid, Widget widget) {
    Long id = (new Date()).getTime();
    widget.setId(id);
    widget.setTopicId(tid);
    widgets.add(widget);
    return widget;
  }

  public List<Widget> findWidgetsForTopic(String tid) {
    List<Widget> widgetsForTopic = new ArrayList<>();
    for (Widget w: widgets) {
      if (w.getTopicId().equals(tid)) {
        widgetsForTopic.add(w);
      }
    }
    return widgetsForTopic;
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public Widget findWidgetById(Long id) {
    for (Widget w : widgets) {
      if (w.getId().equals(id)) {
        return w;
      }
    }
    return null;
  }

  public int updateWidget(String wid, Widget widget) {
    Long id = Long.valueOf(wid);
    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(id)) {
        widgets.set(i, widget);
        return 1;
      }
    }
    return 0;
  }

  public int deleteWidget(String wid) {
    Long id = Long.valueOf(wid);
    int i = 0;
    while (i < widgets.size()) {
      if (widgets.get(i).getId().equals(id)) {
        widgets.remove(i);
        return 1;
      }
      i++;
    }
    return 0;
  }


}
