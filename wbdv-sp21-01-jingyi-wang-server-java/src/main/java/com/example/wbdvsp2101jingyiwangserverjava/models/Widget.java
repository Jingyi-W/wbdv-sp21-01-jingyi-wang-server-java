package com.example.wbdvsp2101jingyiwangserverjava.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="widgets")
public class Widget {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String widgetName;
  private String topicId;
  private String type;
  private Integer widgetOrder;
  private String text;
  private String url;
  private Integer size;
  private Integer width, height;
  private String cssClass;
  private String style;
  private String value;
  private Boolean isOrderedList;

  public Widget(Long id, String widgetName, String topicId, String type,
      Integer widgetOrder, String text, String url, Integer size, Integer width,
      Integer height, String cssClass, String style, String value, Boolean isOrderedList) {
    this.id = id;
    this.widgetName = widgetName;
    this.topicId = topicId;
    this.type = type;
    this.widgetOrder = widgetOrder;
    this.text = text;
    this.url = url;
    this.size = size;
    this.width = width;
    this.height = height;
    this.cssClass = cssClass;
    this.style = style;
    this.value = value;
    this.isOrderedList = isOrderedList;
  }

  public Widget() {
  }

  public String getWidgetName() {
    return widgetName;
  }

  public void setWidgetName(String widgetName) {
    this.widgetName = widgetName;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Integer getWidgetOrder() {
    return widgetOrder;
  }

  public void setWidgetOrder(Integer widgetOrder) {
    this.widgetOrder = widgetOrder;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public Integer getWidth() {
    return width;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public Integer getHeight() {
    return height;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public String getCssClass() {
    return cssClass;
  }

  public void setCssClass(String cssClass) {
    this.cssClass = cssClass;
  }

  public String getStyle() {
    return style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public Boolean getIsOrderedList() {
    return isOrderedList;
  }

  public void setIsOrderedList(Boolean orderedList) {
    this.isOrderedList = orderedList;
  }
}

/*
create table widgets (
       id bigint not null auto_increment,
        css_class varchar(255),
        height integer,
        size integer,
        style varchar(255),
        text varchar(255),
        topic_id varchar(255),
        type varchar(255),
        url varchar(255),
        value varchar(255),
        widget_name varchar(255),
        widget_order integer,
        width integer,
        primary key (id)
    ) engine=InnoDB
 */